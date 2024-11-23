function Project(props) {
    return (
      <ul className="list-group">
        {props.projects.map((result) => (
          <li className="list-group-item" key={result.id}>
            <img
              alt={result.title}
              className="img-fluid"
              src={result.images.original.url}
            />
          </li>
        ))}
      </ul>
    );
  }
  
  export default Project;