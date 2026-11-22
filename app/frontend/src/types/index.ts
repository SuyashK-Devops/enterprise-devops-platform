export interface HealthResponse {
  status: string;
  service: string;
  version: string;
  timestamp: string;
}

export interface User {
  id: number;
  name: string;
  role: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
