export default function BookList(props){
    return(
        <div className="row m-2 p-2" style={{border: `2px solid purple`}}>
            {/**cover area */}
            <div className="col-lg-3">
                <img
                src={props.cover}
                width={`200px`}
                height={`300px`}
                alt={`Book's Cover`}/>
            </div>
            {/**label area */}
            <div className="col-lg-9">
                <h5>ISBN: {props.isbn}</h5>
                Title: {props.title} <br />
                Creator: {props.creator} <br />
                Publisher: {props.publisher} <br />
                Rating: { [...Array(5)].map((item, index) => {
                    if (index < props.rating) {
                        return(
                            <b className="text-warning">
                                <i className="fa fa-star"></i>
                            </b>
                        )
                    }return(
                        <i className="fa fa-star"></i>
                    )
                })}
                <br />
                Progres Penjualan: 
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" 
                    style={{width: `${props.progress}%`}} 
                    aria-valuenow={props.progress} aria-valuemin="0" 
                    aria-valuemax="100">
                        {`${props.progress}%`}
                    </div>
                </div>
            </div>
        </div>
    )
}