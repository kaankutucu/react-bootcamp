function Friend ()  {
    return (
        <>
        <h1>{["Kaan2", "Kaan3", "Kaan4"]}</h1>;

            {
                Friend.map ((Friend) => (
                    <div>{Friend}</div>
                ))}
        </>
    )
}

export default Friend;