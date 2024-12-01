'use client'

import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    async function fetchUserName() {
      const response = await fetch('../apis/name')
      if (response.ok) {
        const data = await response.json()
        setUserName(data.name)
      }
    }

    fetchUserName()
  }, [])

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {userName ? <p>Hello, {userName}!</p> : <p>You need to be logged in to view your data</p>}
    </div>
  )
}
