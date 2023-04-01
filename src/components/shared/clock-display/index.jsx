const ClockDisplay =({date,title,timeZone,offset})=>{
return (
        <div>
            <h1>Title:{title}</h1>
            <h3>{date.toString()}</h3>
            <p>
                {timeZone} | {offset/60}
                </p>
        </div>
    )

}

export default ClockDisplay