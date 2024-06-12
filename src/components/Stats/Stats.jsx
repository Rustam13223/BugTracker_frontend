import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../../context/userContext";
import { useUsersContext } from "../../context/usersContext";
import styles from "./Stats.module.css";

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
      const response = await axios.get("/api/stats", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (response.data.error) {
        setError(response.data.error);
        console.log(response.data.error);
        setLoading(false);
        return;
      }
      setStats(response.data.stats);
      console.log(response.data.stats);
    } catch (error) {
      setError("An error occurred while fetching stats.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (stats.length > 0 && users.length > 0) {
      const programmers = stats.map((stat) => {
        const user = users.find((user) => user.id === stat.user_id);
        return { ...user, solved: stat.solved_bugs };
      });
      // Sort programmers by solved issues in descending order
      programmers.sort((a, b) => b.solved - a.solved);
      setTopProgrammers(programmers);
    }
  }, [stats, users]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2>Top Programmers</h2>
      <ol className={styles.list}>
        {topProgrammers.map((programmer) => (
          <li key={programmer.id}>
            {programmer.first_name} {programmer.last_name} - solved{" "}
            {programmer.solved} issues
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Stats;
