import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [country, setCountry] = useState(
    () => localStorage.getItem("uniCountry") || ""
  );
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("uniData")) || []
  );
  const [saved, setSaved] = useState(
    () => JSON.parse(localStorage.getItem("uniSaved")) || {}
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("uniData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("uniSaved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("uniCountry", country);
  }, [country]);

  const handleSearch = async () => {
    if (!country.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`http://universities.hipolabs.com/search`, {
        params: { country: country.trim() },
      });
      setData(res.data);
    } catch (e) {
      setError(e.response?.data?.message || e.message || "Request error");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCountry("");
    setData([]);
    setSaved({});
    setError(null);
    localStorage.removeItem("uniData");
    localStorage.removeItem("uniSaved");
    localStorage.removeItem("uniCountry");
  };

  const toggleSave = (uni) => {
    const key = `${uni.name}-${uni.country}-${uni.domains[0]}`;
    setSaved((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const savedCount = Object.values(saved).filter(Boolean).length;

  return (
    <div className="app-container">
      <h1 className="app-title">University Finder</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter country in Latin letters"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="input"
        />
        <button onClick={handleSearch} className="button">
          Send
        </button>
        <button onClick={handleReset} className="button reset">
          Reset
        </button>
      </div>

      {data.length > 0 && (
        <div className="saved-count">
          Saved to list: <strong>{savedCount}</strong>
        </div>
      )}

      {loading && <p className="message">Loading...</p>}
      {error && <p className="message error">{error}</p>}

      {data.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>University name</th>
              <th>Country</th>
              <th>City</th>
              <th>Domains</th>
              <th>Website</th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody>
            {data.map((uni, i) => {
              const key = `${uni.name}-${uni.country}-${uni.domains[0]}`;
              return (
                <tr key={key}>
                  <td>{i + 1}</td>
                  <td>{uni.name}</td>
                  <td>{uni.country}</td>
                  <td>{uni["state-province"] || "-"}</td>
                  <td>{uni.domains.join(", ")}</td>
                  <td>
                    <a
                      href={uni.web_pages?.[0] || "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {uni.web_pages?.[0] || "N/A"}
                    </a>
                  </td>
                  <td className="checkbox-cell">
                    <input
                      type="checkbox"
                      checked={!!saved[key]}
                      onChange={() => toggleSave(uni)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        !loading &&
        !error &&
        country.trim() && <p className="message">Table is empty</p>
      )}
    </div>
  );
}
