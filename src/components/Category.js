import React from 'react'
import { Link } from 'wouter'

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h1>{name}</h1>
      <ul>
        {options.map((item, index) => (
          <li key={item.id} index={index} type="primary">
            <Link to={`/search/${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
