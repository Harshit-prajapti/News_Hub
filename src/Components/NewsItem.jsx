/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { PureComponent } from 'react'

export default class NewsItem extends PureComponent {
  render() {
    let {title, description} = this.props;
    return (
      <>
      <div className="card" style={{width : "18rem"}}>
        <img src = {this.props.imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                < h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a target='_blank' href={this.props.url}className="btn btn-dark">Read more</a>
            </div>
        </div>
      </>
    )
  }
}
