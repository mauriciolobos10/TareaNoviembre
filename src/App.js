import { useState } from 'react'
import './App.css';
import Home from './components/Home';
import React, { Component }  from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Home></Home>
    </QueryClientProvider>
  );
}

export default App;
