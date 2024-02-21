

const DynamicRoute = ({params,searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>this is dynamic page:{params.id}</h1>
            <h2>search params:{searchParams.laptop}</h2>
        </div>
    );
};

export default DynamicRoute;