import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";

import { formatTimestamp } from "./utils/date";

import type {
  HealthResponse,
  User,
  Product,
} from "./types";

import {
  getUserHealth,
  getProductHealth,
  getUsers,
  getProducts,
} from "./services/api";

function App() {
  const [userHealth, setUserHealth] =
    useState<HealthResponse | null>(null);

  const [productHealth, setProductHealth] =
    useState<HealthResponse | null>(null);

  const [error, setError] = useState("");

  const [users, setUsers] = useState<User[]>([]);

  const [products, setProducts] = useState<Product[]>([]);

  async function loadDashboard() {
    try {
      const [
        userHealthData,
        productHealthData,
        usersData,
        productsData,
      ] = await Promise.all([
        getUserHealth(),
        getProductHealth(),
        getUsers(),
        getProducts(),
      ]);

      setUserHealth(userHealthData);
      setProductHealth(productHealthData);

      setUsers(usersData);
      setProducts(productsData);

      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to reach backend services.");
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div className="container">

      <Header />

      <button
        className="refresh-button"
        onClick={loadDashboard}
      >
        🔄 Refresh
      </button>

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      <section className="info">

        <p>
          <strong>Environment:</strong> Development
        </p>

        <p>
          <strong>Docker:</strong> Docker Compose
        </p>

        <p>
          <strong>Network:</strong> enterprise-network
        </p>

      </section>

      <div className="cards">

        <ServiceCard
          title="User Service"
          status={userHealth?.status ?? "Loading..."}
          version={userHealth?.version ?? "--"}
          countLabel="Users"
          count={(users?.length ?? 0).toString()}
        />

        <ServiceCard
          title="Product Service"
          status={productHealth?.status ?? "Loading..."}
          version={productHealth?.version ?? "--"}
          countLabel="Products"
          count={(products?.length ?? 0).toString()}
        />

      </div>

      <footer>
        Last Updated: {
          userHealth
            ? formatTimestamp(userHealth.timestamp)
            : "Loading..."
        } 
      </footer>

    </div>
  );
}

export default App;
