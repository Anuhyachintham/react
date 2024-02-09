import { useState } from "react"
const MadeGoal=()=>{
return <h1>Goal</h1>
}
const MissedGoal=()=>{
    return <h1>Missed Goal</h1>
}
const Goal=()=>{
 const  [goal,SetGoal]=useState(true)



return(<div>
{goal?<MadeGoal/>:<MissedGoal/>}
</div>)
}

export default Goal