import React from "react";
import "./movie-detail-page.scss";
import classNames from "classnames";

import ArrowLeftDropCircleIcon from "mdi-react/ArrowLeftDropCircleIcon";
import FilmstripIcon from "mdi-react/FilmstripIcon";



class MovieDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let { movie, onClose, show } = this.props;
    return (
      <div className={classNames("page__movie-detail", {"page__movie-detail--hidden": !show})} >
        <div className={classNames("page__movie-detail__window", {"page__movie-detail__window--hidden": !show})}>

          {/* Header */}
          <div className="page__movie-detail__window__header">
            <ArrowLeftDropCircleIcon className="page__movie-detail__window__header__close-icon" onClick={onClose}/>
            <div className="page__movie-detail__window__header__title">Detalhes do filme</div>
          </div>

          <div className="page__movie-detail__window__data">
            <FilmstripIcon className="page__movie-detail__window__data__icon" />
            <div className="page__movie-detail__window__data__content">
              <div className="page__movie-detail__window__data__content__text">Titulo:</div>
              <div className="page__movie-detail__window__data__content__value">{movie.Title}</div>

              <div className="page__movie-detail__window__data__content__text">Ano:</div>
              <div className="page__movie-detail__window__data__content__value">{movie.Year}</div>

              <div className="page__movie-detail__window__data__content__text">Rating:</div>
              <div className="page__movie-detail__window__data__content__value">{movie.imdbRating}</div>

              <div className="page__movie-detail__window__data__content__text">Diretor:</div>
              <div className="page__movie-detail__window__data__content__value">{movie.Director}</div>

              <div className="page__movie-detail__window__data__content__text">Gênero:</div>
              <div className="page__movie-detail__window__data__content__value">{movie.Genre}</div>

              <div className="page__movie-detail__window__data__content__text">Atores:</div>
              <div className="page__movie-detail__window__data__content__value">{movie.Actors}</div>
            
            </div>
            {movie.Poster &&
              <img src={movie.Poster} className="page__movie-detail__window__data__image" />
            }
            
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default MovieDetailPage;
