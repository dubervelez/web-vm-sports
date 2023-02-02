import { useEffect } from "react"
import { useState } from "react"
import { getLeaderboard } from "../api/leaderboard"



function Leaderboard() {

  const [leaderboardData, setLeaderboarData] = useState([])

  useEffect(() => {
    getLeaderboard(
      (response)=>{
        setLeaderboarData(response.data)
      },
      (error)=>{
        console.error('error al leer obtener los datos del ledearboar')
      }
    )
  },[] )
  
  console.log(leaderboardData)
    return(
        <div className="relative bottom-64 mb-64">
            <table className="w-3/5 m-auto table-auto text-center sticky top-0 mb-64">
                <thead >
                    <tr className="bg-slate-500">
                        <th>Posisicion</th>
                        <th>Clud</th>
                        <th>puntos</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                    </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((data, index)=>{
                    return(
                      <tr key={index} className="bg-slate-400 border-b-2 border-slate-500">
                        <td>{index + 1}</td>
                        <td>{data.team}</td>
                        <td>{data.points}</td>
                        <td>{data.gamesPlayed}</td>
                        <td>{data.wins}</td>
                        <td>{data.draws}</td>
                        <td>{data.losses}</td>
                        <td>{data.goals}</td>
                        <td>{data.goalsAllowed}</td>
                      </tr>
                    )
                  })
                  }
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard