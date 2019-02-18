import React from 'react'
import './search-page.scss'

import MagnifyIcon from 'mdi-react/MagnifyIcon'
import EyeIcon from 'mdi-react/EyeIcon'
import Card from '../../components/card'
import Button from '../../components/button'
import Input from '../../components/input'
import CardHeader from '../../components/card-header'
import Loading from '../../components/loading'
import Modal from '../../components/modal'
import MovieDetailPage from '../movie-detail'
import not_found from '../../assets/images/not_found.png'

import * as movie_api from "../../api/movie-api";


const MoviesGridHeader = () => (
  <div className="page__search__movies-grid__header">
    <div>POSTER</div>
    <div>NOME</div>
    <div>RATINGS</div>
  </div>
);

const MoviesGridItem = ({ movie, onView }) => (
  <div className="page__search__movies-grid__item">
    {movie.Poster && 
      <img src={`${movie.Poster}`} className="page__search__movies-grid__image" />
    }
    {!movie.Poster &&
      <img src={not_found} className="page__search__movies-grid__image"  />
    }
    <div>{movie.Title}</div>
    <div>{movie.Rating}</div>
    <EyeIcon
      onClick={() => onView(movie)}
      className="page__search__movies-grid__item__icon"
    />
  </div>
);

const MoviesLayout = ({ onView, movies }) => {
  return (
    <div className="page__search__movies-grid">
      <MoviesGridHeader />
      {movies &&
        movies.map((movie, index) => (
          <MoviesGridItem
            key={index}
            movie={movie}
            onView={onView}
            history={history}
          />
        ))}
    </div>
  );
}


class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      show_modal: false,
      modal_description: '',
      show_movie_detail: false,

      filter: '',
      movies: [],
      movie: null

    }
  }

  onChange = async ({ target: { name, value } }) => {
    await this.setState({ [name]: value })
  }

  onView = async(movie) => {
    let result = await movie_api.getMovieById(movie.imdbID);

    console.log(result)
    this.setState({
      movie: result,
      show_movie_detail: true
    })
  }

  onClean = () => { 
    this.setState({
      filter: '',
      movies: [],
      movie: null
    })
  }

  onLoading = async () => {
    this.setState({
      loading: !this.state.loading,
    })
  }

  toggleModal = () => {
    this.setState({
      show_modal: !this.state.show_modal,
    })
  }

  onCloseMovieDetail = () => {
    this.setState({
      movie: null,
      show_movie_detail: false,
    })
  }

  validateSearch = async(value) => {
    return (!value || value == undefined || value == "" || value.length == 0)
  }

  onSubmit = async () => { 
    let check_search = await this.validateSearch(this.state.filter)
    if (check_search) {
      this.setState({
        show_modal: true,
        description_modal: 'Favor inserir filtro de pesquisa'
      })
      return
    }
    await this.onLoading()
    let result = await movie_api.getMovies(this.state.filter);
    await this.setState({
      movies: result
    })
    await this.onLoading()
  }


  render() {
    return (
      <div className="page__search">
        <Loading loading={this.state.loading} />

        {this.state.show_modal && <Modal
          show={this.state.show_modal}
          onClose={this.toggleModal}
          title="Buscar filmes"
          description={this.state.description_modal}
          confirm="Fechar"
        />}

        {this.state.movie && (
          <MovieDetailPage
            show={this.state.show_movie_detail}
            movie={this.state.movie}
            onClose={this.onCloseMovieDetail}
          />
        )}

        <Card className="page__search__card">
          <CardHeader big logo Icon={MagnifyIcon}>
            Buscar
          </CardHeader>
          <div className="page__search__content">
            <Input
              label="Filtro"
              name="filter"
              onChange={this.onChange}
              value={this.state.filter}
              className="page__search__content__item--span"
            />

            <Button
              white
              className="page__search__content__item--span"
              onClick={this.onClean}>
              Limpar
            </Button>

            <Button
              blue
              className="page__search__content__item--span"
              onClick={this.onSubmit}>
              Buscar
            </Button>

            <div className="page__search__content__item--line">
              <MoviesLayout 
                onView={this.onView}
                movies={this.state.movies}
              />
            </div>

          </div>
        </Card>

        <div className="page__search__footer">
          Teste prático DTI - uso de React
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default SearchPage
