import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../../context/userContext";
import { useUsersContext } from "../../context/usersContext";
import styles from "./Stats.module.css";
import { API_URL } from "../../utils/config";

/**
 * Renders a list of top programmers and the number of issues they have solved.
 * @returns {JSX.Element} The rendered Stats component.
 */
const Stats = () => {
  const { user } = useUserContext();
  const { users } = useUsersContext();
  const [topProgrammers, setTopProgrammers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.data.error) {
        setError(response.data.error);
        console.log(response.data.error);
        setLoading(false);
        return;
      }
      setStats(response.data);
    } catch (error) {
      setError("An error occurred while fetching stats.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (stats.length > 0 && users.length > 0) {
      setTopProgrammers(stats);
    }
  }, [stats, users]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2>Top Programmers</h2>
      <ol className={styles.list}>
        {topProgrammers.map((programmer, index) => (
          <li key={programmer.userId}>
            <p>{index + 1}</p>
            <p>
              {programmer.user.firstName} {programmer.user.secondName}
            </p>
            <p>{programmer.solvedBugs} issues solved</p>
          </li>
        ))}
      </ol>
      {topProgrammers.length === 0 && <p>No programmers found</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Stats;
