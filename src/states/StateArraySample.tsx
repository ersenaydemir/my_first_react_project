import React, { useState } from 'react'

function StateArraySample() {

    let citiesData = ["İstanbul", "Ankara", "İzmir", "Kocaeli", "Sakarya", "Antalya", "Mersin"];

    const [cities, setCities] = useState<[]>([]);
  return (
    <div>StateArraySample</div>
  )
}

export default StateArraySample