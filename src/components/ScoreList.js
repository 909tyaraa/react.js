export default function ScoreList(props) {
    return (
      <div className="container bg-dark form-control" style={{fontFamily:`poppins`}}>
        
          <div className="card-body text-white">
            <div className="row">
            <div className="col-1">
                <h3 className="mt-auto">{props.id}</h3>
              </div> 
              <div className="col-4 text-info">
                <small>Name</small>
                <h3>{props.name}</h3>
              </div>
              <div className="col-1 text-info">
                <small>Math</small>
                <h5>{props.math}</h5>
  
                <small>English</small>
                <h5>{props.english}</h5>
              </div>
              <div className="col-2 text-info">
                <small>Chemistry</small>
                <h5>{props.chemistry}</h5>
              </div>
              <div className="col-4 text-info">
                <small>Rata-rata</small>
                <h5>{props.rata}</h5>
  
                <small>Status</small>
                <h5>{props.status}</h5>
              </div>
            </div>
          </div>
        
      </div>
    );
  }