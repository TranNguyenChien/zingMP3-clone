"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const albumLists = $$(".album--container");
const songLists = $$(".playlist__list");
const playLists = $$(".playlist--container");
const MVLists = $$(".mv--container");
const artristLists = $$(".artist--container");
const slideExplore = $(".explore__slide--container");
const normalPlayListsExplore = $$(".normal-playlist--section");
const specialPlaylistsExplore = $$(".special-playlist--section");
const tabRadioplaylist = $$(".radio--container");
const newPlayLists = $(".new-playlist--container");
const favortieSingle = $(".fav-artist--container");
const brands = $(".brand--container");
const eventExplore = $(".event--container");
const labelExplore = $(".label--container");

console.log(eventExplore);

const app = {
  currentPlayList: 0, //Create a starting value
  albumList: JSON.parse(localStorage.getItem(ALBUM_STORAGE_KEY) || "[]"),
  brandsExplore: JSON.parse(localStorage.getItem(BRAND_STORAGE_KEY) || "[]"),
  slideExplores: JSON.parse(
    localStorage.getItem(EXPLORE_SLIDE_STORAGE_KEY) || "[]"
  ),
  normalPlayLists: JSON.parse(
    localStorage.getItem(NORMALPLAYLIST_STORAGE_KEY) || "[]"
  ),
  specialPlayList: JSON.parse(
    localStorage.getItem(SPECIAL_PLAYLIST_STORAGE_KEY) || "[]"
  ),
  favSingles: JSON.parse(
    localStorage.getItem(FAVORITE_ARTIST_STORAGE_KEY) || "[]"
  ),
  eventExplores: JSON.parse(localStorage.getItem(EVENT_STORAGE_KEY) || "[]"),
  songPlayLists: JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY) || "[]"),
  playListsSong: JSON.parse(localStorage.getItem(PLAYLIST_STORAGE_KEY) || "[]"),
  ListMV: JSON.parse(localStorage.getItem(MV_STORAGE_KEY) || "[]"),
  listAstrist: JSON.parse(localStorage.getItem(ARTIST_STORAGE_KEY) || "[]"),
  radioPlaylist: JSON.parse(localStorage.getItem(RADIO_STORAGE_KEY) || "[]"),
  newPlaylistLists: JSON.parse(
    localStorage.getItem(NEW_PLAYLIST_STORAGE_KEY) || "[]"
  ),

  //Render Song
  rederListSong: function () {
    this.songs = this.songPlayLists[this.currentPlayList];

    songLists.forEach((songList, songIndex) => {
      songList.innerHTML = this.songs
        .map((song, index) => {
          return `
        <div class="playlist__list-song media ${
          app.currentPlayList === index ? "active" : ""
        }" data-index="${index}">
            <div class="playlist__song-info media__left">
              <div class="playlist__song-check">
                  <input type="checkbox" name="" id="playlist__check-${index}" class="mr-10" style="display: none">
                  <label for="playlist__check-${index}"></label>
              </div>
              <i class="icon ic-song mr-10"></i>
              <div class="playlist__song-thumb media__thumb mr-10" style="background: url('${
                song.image
              }') no-repeat center center / cover">
                  <div class="thumb--animate">
                  <div class="thumb--animate-img" style="background: url('/assets/images/SongActiveAnimation/icon-playing.gif') no-repeat 50% / contain">
              </div>
            </div>
            <div class="play-song--actions">
              <div class="control-btn btn-toggle-play btn--play-song">
                <i class="icon ic-play"></i>
              </div>
            </div>
            </div>
            <div class="playlist__song-body media__info">
              <span class="playlist__song-title info__title">${song.name}</span>
              <p class="playlist__song-author info__author">
                  ${song.singer.map((singer, singerindex) => {
                    return `
                      <a href="#" class="is-ghost">${singer}</a>
                    `;
                  })}
              </p>
            </div>
          </div>
          <span class="playlist__song-time media__content">
            ${song.duration}
          </span>
          <div class="playlist__song-option ${
            index === 0 && "song--tab"
          } media__right">
            <div class="playlist__song-btn btn--mv option-btn hide-on-mobile">
              <i class="btn--icon song__icon icon ic-mv"></i>
            </div>
            <div class="playlist__song-btn btn--mic option-btn hide-on-mobile">
              <i class="btn--icon song__icon icon ic-karaoke"></i>
            </div>
            <div class="playlist__song-btn song-btn--heart option-btn hide-on-mobile">
              <i class="btn--icon song__icon icon--heart icon ic-like-full primary"></i>
            </div>
            <div class="playlist__song-btn option-btn 
            ${index === 1 && "hide-on-tablet"}">
              <i class="btn--icon icon ic-more"></i>
              </div>
          </div>
        </div>
      `;
        })
        .join("");
    });
  },

  //Render PlayLists
  renderPlayLists: function () {
    playLists.forEach((playlistsList, index) => {
      playlistsList.innerHTML = `
          <div class="col l-2-4 m-3 c-4 ${index === 1 && "mb-30"}">
            <div class="row__item  playlist--create item--playlist">
              <div class="row__item-container flex--center item-create--properties">
                <i class="icon ic-add album__create-icon"></i>
                <span class="album__create-annotate text-center">Tạo playlist mới</span>
              </div>
            </div>
          </div>
          ${app.playListsSong
            .map((playlistsSong) => {
              return `
              <div class="col l-2-4 m-3 c-4 ${index === 1 && "mb-30"}">
                <div class="row__item item--playlist">
                  <div class="row__item-container flex--top-left">
                    <div class="row__item-display br-5">
                      <div class="row__item-img img--square" style="background: url('${
                        playlistsSong.image
                      }') no-repeat center center / cover"></div>
                        <div class="row__item-actions">
                          <div class="action-btn btn--heart">
                            <i class="btn--icon icon--heart icon ic-like-full primary"></i>
                          </div>
                          <div class="btn--play-playlist">
                            <div class="control-btn btn-toggle-play">
                              <i class="icon ic-play"></i>
                            </div>
                          </div>
                        <div class="action-btn">
                          <i class="btn--icon icon ic-more"></i>
                        </div>
                      </div>
                    <div class="overlay"></div>
                  </div>
                  <div class="row__item-info">
                    <a href="#" class="row__info-name is-twoline">${
                      playlistsSong.name
                    }</a>
                    <h3 class="row__info-creator">${playlistsSong.creator}</h3>
                  </div>
                </div>
              </div>
            </div>
          `;
            })
            .join("")}    
        `;
    });
  },

  //Render Album
  renderAlbumList: function () {
    albumLists.forEach((albumlistLists, index) => {
      albumlistLists.innerHTML = this.albumList
        .map((album) => {
          return `
            <div class="col l-2-4 m-3 c-4 ${index === 1 && "mb-30"}">
              <div class="row__item item--album">
                <div class="row__item-container flex--top-left">
                  <div class="row__item-display br-5">
                    <div class="row__item-img img--square" style="background: url('${
                      album.image
                    }') no-repeat center center / cover"></div>
                      <div class="row__item-actions">
                        <div class="action-btn btn--heart">
                          <i class="btn--icon icon--heart icon ic-like-full primary"></i>
                        </div>
                        <div class="btn--play-playlist">
                          <div class="control-btn btn-toggle-play">
                            <i class="icon ic-play icon-play"></i>
                          </div>
                        </div>
                      <div class="action-btn">
                        <i class="btn--icon icon ic-more"></i>
                      </div>
                    </div>
                    <div class="overlay"></div>
                  </div>
                  <div class="row__item-info">
                    <a href="#" class="row__info-name is-twoline">${
                      album.name
                    }</a>
                  </div>
                </div>
              </div>
            </div>
          `;
        })
        .join("");
    });
  },

  //Render MV
  renderMVLists: function () {
    MVLists.forEach((mvlist, index) => {
      mvlist.innerHTML = this.ListMV.map((mv) => {
        return `
          <div class="col l-4 m-6 c-12 ${index === 1 && "mb-30"}">
            <div class="row__item item--mv">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div class="row__item-img img--mv" style="background: url('${
                    mv.image
                  }') no-repeat center center / cover"></div>
                    <div class="row__item-actions">
                      <div class="action-btn mv-btn--close">
                        <i class="icon ic-close btn--icon"></i>
                      </div>
                      <div class="btn--play-playlist">
                        <div class="control-btn btn-toggle-play">
                          <i class="icon ic-play icon-play"></i>
                        </div>
                      </div>
                    </div>
                    <div class="overlay"></div>
                    <div class="mv__time">${mv.time}</div>
                  </div>
                  <div class="row__item-info media">
                    <div class="media__left">
                      <div class="media__thumb is-rounded mr-10" style="background: url('${
                        mv.authorAvatar
                      }') no-repeat center center / cover"></div>
                        <div class="media__info">
                          <span class="info__title is-active is-twoline">${
                            mv.name
                          }
                          </span>
                          <p class="info__author">
                            ${mv.author
                              .map((author, index) => {
                                return `
                                <a href="#" class="is-ghost">${
                                  author + ", "
                                }</a>
                                `;
                              })
                              .join("")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
          </div>  
        `;
      }).join("");
    });
  },

  //Render Artrist
  renderArtist: function () {
    artristLists.forEach((artistlist, index) => {
      artistlist.innerHTML = this.listAstrist
        .map((artist) => {
          return `
            <div class="col l-2-4 m-3 c-6 ${index === 1 && "mb-30"}">
              <div class="row__item item--artist">
                <div class="row__item-container flex--top-left">
                  <div class="row__item-display is-rounded">
                    <div class="row__item-img img--square is-rounded" style="background: url('${
                      artist.image
                    }') no-repeat center center / contain"></div>
                    <div class="row__item-actions">
                      <div class="btn--play-playlist">
                        <div class="control-btn btn-toggle-play">
                          <i class="icon ic-play icon-play"></i>
                        </div>
                      </div>
                    </div>
                    <div class="overlay"></div>
                  </div>
                  <div class="row__item-info media artist--info">
                  <div class="media__left">
                    <div href="#" class="row__info-name is-ghost mt-15 lh-19 text-center">
                      ${artist.name}
                      <i class="icon ic-star row__info-icon">
                        <div class="icon-overlay"></div>
                      </i>
                    </div>
                    <h3 class="row__info-creator text-center">${
                      artist.folowers
                    } quan tâm</h3>
                  </div>
                </div>
                <div class="row__item-btn">
                  <button class="button is-small button-primary">
                    <i class="icon ic-check-outline"></i>
                    <span>&nbsp;Đã quan tâm</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
        })
        .join("");
    });
  },

  //Render tab--explore
  renderTabExplore: function () {
    //Render Slider
    slideExplore.innerHTML = this.slideExplores
      .map((slide) => {
        return `
        <div class="explore__slide-move">
          <div class="slide__move-btn btn--prev">
            <i class="icon ic-go-left"></i>
          </div>
          <div class="slide__move-btn btn--next">
            <i class="icon ic-go-right"></i>
          </div>
        </div>
        ${this.slideExplores
          .map((exploreSlide, index) => {
            return `
                  <div class="col l-4 m-4 c-6 explore__slide-item 
                            ${index === 0 && "first next"} 
                            ${index === 1 && "second"} 
                            ${index === 2 && "third"}
                            ${index === 3 && "fourth"}
                            ${
                              index > 3 &&
                              index < app.slideExplores.length - 1 &&
                              "fifth"
                            }
                            ${
                              index === app.slideExplores.length - 1 &&
                              "sixth prev"
                            }
                  ">
                    <div class="row__item-display">
                      <div class="explore__slide-img row__item-img img--rec" style="background: url('${
                        exploreSlide.image
                      }') no-repeat center center / cover"></div>
                      </div>
                    </div>
              `;
          })
          .join("")}
      `;
      })
      .join("");

    //Render Normal playlist
    normalPlayListsExplore.forEach((normalPlayList, normalIndex) => {
      if (normalIndex === 0) {
        normalPlayList.innerHTML = this.normalPlayLists
          .map((playlist, index) => {
            if (index < 3) {
              return `
                <div class="col l-12 m-12 c-12 mb-16">
                  <div class="container__header">
                    <a href="#" class="container__header-title">
                      <h3>${app.normalPlayLists[index].header}</h3>
                    </a>
                  </div>
                </div>
                <div class="col l-12 m-12 c-12">
                  <div class="row no-wrap normal-playlist--container">
                    ${app.normalPlayLists[index].playlists
                      .map((playlist) => {
                        return `
                                <div class="col l-2-4 m-3 c-4 mb-30">
                                  <div class="row__item item--playlist">
                                    <div class="row__item-container flex--top-left">
                                      <div class="row__item-display br-5">
                                        <div class="row__item-img img--square" style="background: url('${
                                          playlist.image
                                        }') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                          <div class="action-btn btn--heart">
                                            <i class="btn--icon icon--heart icon ic-like"></i>
                                          </div>
                                        <div class="btn--play-playlist">
                                      <div class="control-btn btn-toggle-play">
                                        <i class="icon ic-play"></i>
                                      </div>
                                    </div>
                                    <div class="action-btn">
                                      <i class="btn--icon icon ic-more"></i>
                                    </div>
                                  </div>
                                  <div class="overlay"></div>
                                </div>
                                <div class="row__item-info explore-playlist--info">
                                  <a href="#" class="row__info-name is-oneline">
                                    ${playlist.name}
                                  </a>
                                  <p class="info__artist">
                                    ${playlist.artists
                                      .map((artist) => {
                                        return `
                                                <a href="#" class="${
                                                  (index != 1 &&
                                                    index != 2 &&
                                                    "is-ghost") ||
                                                  "is-description"
                                                }">
                                                    ${artist}
                                                  </a>
                                              `;
                                      })
                                      .join(",")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </div>
              `;
            }
          })
          .join("");
      } else if (normalIndex === 5) {
        normalPlayList.innerHTML = this.normalPlayLists
          .map((playlist, index) => {
            if (playlist.header === "") {
              return `
                <div class="col l-12 m-12 c-12">
                  <div class="row no-wrap normal-playlist--container">
                    ${app.normalPlayLists[index].playlists
                      .map((playlist) => {
                        return `
                                <div class="col l-2-4 m-3 c-4 mb-30">
                                  <div class="row__item item--playlist">
                                    <div class="row__item-container flex--top-left">
                                      <div class="row__item-display br-5">
                                        <div class="row__item-img img--square" style="background: url('${
                                          playlist.image
                                        }') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                          <div class="action-btn btn--heart">
                                            <i class="btn--icon icon--heart icon ic-like"></i>
                                          </div>
                                        <div class="btn--play-playlist">
                                      <div class="control-btn btn-toggle-play">
                                        <i class="icon ic-play"></i>
                                      </div>
                                    </div>
                                    <div class="action-btn">
                                      <i class="btn--icon icon ic-more"></i>
                                    </div>
                                  </div>
                                  <div class="overlay"></div>
                                </div>
                                <div class="row__item-info explore-playlist--info">
                                  <a href="#" class="row__info-name is-oneline">
                                    ${playlist.name}
                                  </a>
                                  <p class="info__artist">
                                    ${playlist.artists
                                      .map((artist) => {
                                        return `
                                                <a href="#" class="${
                                                  (index != 1 &&
                                                    index != 2 &&
                                                    "is-ghost") ||
                                                  "is-description"
                                                }">
                                                    ${artist}
                                                  </a>
                                              `;
                                      })
                                      .join(",")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </div>
              `;
            }
          })
          .join("");
      }
    });

    //Render Special playlist
    specialPlaylistsExplore.forEach((specialPlayList, specialIndex) => {
      specialPlayList.innerHTML = this.specialPlayList
        .map((special, index) => {
          return `
            <div class="col l-12 m-12 c-12 mb-16">
                    <div class="container__header special-playlist--header">
                        <div class="row__item-info media">
                            <div class="media__left">
                                <div class="row__item-display br-5">
                                    <div class="row__item-img img--square" style="background: url('${
                                      special.header.image
                                    }') no-repeat center center / cover"></div>
                                </div>
                                <div class="media__info special-playlist--info">
                                    <span class="info__explication">${
                                      special.header.explication
                                    }</span>
                                    <h3 class="info__topic-name is-active">${
                                      special.header.topicName
                                    }</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col l-12 m-12 c-12">
                    <div class="row no-wrap special-playlist--container">
                        ${special.playlists
                          .map((playlist, index) => {
                            return `
                                <div class="col l-2-4 m-3 c-4">
                                    <div class="row__item item--playlist">
                                        <div class="row__item-container flex--top-left">
                                            <div class="row__item-display br-5">
                                                <div class="row__item-img img--square" style="background: url('${
                                                  playlist.image
                                                }') no-repeat center center / cover"></div>
                                                <div class="row__item-actions">
                                                    <div class="action-btn btn--heart">
                                                        <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                                                    </div>
                                                    <div class="btn--play-playlist">
                                                        <div class="control-btn btn-toggle-play">
                                                            <i class="bi bi-play-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="btn--icon icon ic-more"></i>
                                                    </div>
                                                </div>
                                                <div class="overlay"></div>
                                            </div>
                                            <div class="row__item-info explore-playlist--info">
                                              <a href="#" class="row__info-name is-oneline">
                                                ${playlist.name}
                                              </a>
                                              <p class="info__artist">
                                                ${playlist.artists
                                                  .map((artist) => {
                                                    return `
                                                            <a href="#" class="is-ghost">${artist}</a>
                                                        `;
                                                  })
                                                  .join("")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                          })
                          .join("")}
                    </div>
                </div>
          `;
        })
        .join();
    });

    //Render New PlayList
    newPlayLists.innerHTML = `
        ${this.newPlaylistLists
          .map((newplaylist) => {
            return `
          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div class="row__item-img img--square" style="background: url('${
                    newplaylist.image
                  }') no-repeat center center / cover"></div>
                  <div class="row__item-actions">
                    <div class="btn--play-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="icon ic-play"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">
                    ${newplaylist.name}
                  </a>
                  <h3 class="row__info-creator">
                    ${newplaylist.singer.map((singer, index) => {
                      return `
                              <a href="#" class="is-ghost">${singer}</a>
                      `;
                    })}
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">
                      #${newplaylist.order}
                    </div>
                    <div class="info__detail-time">
                      ${newplaylist.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        `;
          })
          .join("")}
          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container new-song--empty flex--top-left">
                <span>Xem tất cả</span>
              </div>
            </div>
          </div>
        `;

    //Render Favorite Single
    favortieSingle.innerHTML = this.favSingles
      .map((singerFav) => {
        return `
          <div class="col l-4 m-6 c-6">
            <div class="row__item item--fav-artist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div class="row__item-img img--square" style="background: url('${
                    singerFav.image
                  }') no-repeat center center / cover"></div>
                  <div class="row__item-actions">
                    <div class="btn--play-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="icon ic-play icon-play"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                  <div class="blur"></div>
                  <div class="row__item-display-content">
                    <h3 class="display__content-explication is-oneline">
                      ${singerFav.explication}
                    </h3>
                    <p class="display__content-artist is-oneline">
                      ${singerFav.name}
                    </p>
                    <div class="display__content-list">
                      ${singerFav.songs.map((song) => {
                        return `
                                <div class="display__content-list-song">
                                  <div class="display__content-song-img" style="background: url('${song}') no-repeat center center / cover"></div>
                                </div>
                              `;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    //Render Label

    //Render Brand
    brands.innerHTML = this.brandsExplore
      .map((brand) => {
        return `
          <div class="col l-1-5 m-3 c-4 container__footer-brand-item mb-30">
            <div class="footer__brand-container">
              <div class="container__footer-brand-background img--rec"></div>
              <img src="${brand.image}" alt="brand" class="container__footer-brand-img">
            </div>
          </div>
        `;
      })
      .join("");

    //Render Event
    eventExplore.innerHTML = this.eventExplores
      .map((eventList, eventIndex) => {
        return `
          <div class="col l-4 m-6 c-12">
            <div class="row__item item--event">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div class="row__item-img img--mv" style="background: url('${
                    eventList.image
                  }') no-repeat center center / cover"></div>
                  <div class="blur"></div>
                  <div class="row__item-display-content">
                    <div class="display__content-label">Sự Kiện</div>
                    <h3 class="display__content-title">
                      ${eventList.name}
                    </h3>
                    <p class="display__content-time">${eventList.time}</p>
                  </div>
                </div>
                <div class="row__item-info media">
                  <div class="media__left">
                    <div class="media__info">
                      <span class="info__title event--title is-active">Lượt chúc mừng</span>
                      <div class="info__avatar">
                        ${eventList.fans
                          .map((fan) => {
                            return `
                                  <div class="info__avatar-item">
                                    <div class="info__avatar-img" style="background: url('${fan}') no-repeat center center / cover"></div>
                                  </div>
                                `;
                          })
                          .join("")}
                      <div class="info__avatar-item">
                        <p class="info__avatar-text">+${eventList.fanAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="media__content">
                  <button class="button button-primary event__button">
                    <span>${eventList.action}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        `;
      })
      .join("");
  },

  renderRadio: function () {
    tabRadioplaylist.forEach((tabRadio, radioIndex) => {
      tabRadio.innerHTML = this.radioPlaylist
        .map((radio, index) => {
          return `
            <div class="col l-1-7 m-2-4 c-3">
              <div class="row__item item--radio">
                <div class="row__item-container flex--top-left">
                  <div class="item--has-attach">
                    <svg class="svg row__item-frame" fill="transparent" width="100%" height="100%" viewBox="0 0 100 100">
                      <circle class="svg-circle-bg" stroke="rgba(255, 255, 255, 0.2)" cx="50" cy="50" r="48.75" stroke-width="2.5"></circle>
                      <circle class="svg-circle" stroke="#ff4b4a" cx="50" cy="50" r="48.75" stroke-width="2.5" stroke-dasharray="306.3052837250048" stroke-dashoffset="${
                        Math.random() * 306
                      }" style="transition: stroke-dashoffset 850ms ease-in-out 0s;"></circle>
                    </svg>
                  <div class="row__item-display is-rounded">
                  <div class="row__item-img img--square is-rounded" style="background: url('${
                    radio.image
                  }') no-repeat center center / contain"></div>
                  <div class="row__item-actions">
                    <div class="btn--play-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="icon ic-play icon-play"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="radio__label">LIVE</div>
                <div class="radio__logo is-rounded">
                  <div class="radio__logo-img" style="background: url('${
                    radio.logo
                  }') no-repeat center center / cover"></div>
                </div>
              </div>
              <div class="row__item-info media radio--info">
              <div class="media__left">
                <div class="media__info text-center">
                  <span class="info__title is-active is-oneline">${
                    radio.name
                  }</span>
                  <h3 class="row__info-creator text-center">${
                    radio.viewers
                  } đang nghe</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
        })
        .join("");
    });
  },

  //Handle onclick on "content__navbar-item"
  handleOnclickNavbarItem: function () {
    const contentNavBar = $$(".content__navbar-item");
    const tabContainers = $$(".container__tab");

    contentNavBar.forEach((songIndex, index) => {
      songIndex.addEventListener("click", function () {
        const tabContainer = tabContainers[index];
        contentNavBar.forEach(() => {
          $(".content__navbar-item.active").classList.remove("active");
          $(".container__tab.active").classList.remove("active");

          this.classList.add("active");
          tabContainer.classList.add("active");
        });
      });
    });
  },

  //Handle onclick on "sidenar__nav-item"
  handleOnclickSidebarNavItem: function () {
    const sidebarNavItem = $$(".sidebar__nav-item");
    const appContainers = $$(".app__container");

    sidebarNavItem.forEach((sidebarIndex, index) => {
      sidebarIndex.addEventListener("click", function () {
        const appContent = appContainers[index];
        sidebarNavItem.forEach(() => {
          $(".sidebar__nav-item.active").classList.remove("active");
          $(".app__container.active").classList.remove("active");

          this.classList.add("active");
          appContent.classList.add("active");
        });
      });
    });
  },

  start: function () {
    this.rederListSong();

    this.renderPlayLists();

    this.renderAlbumList();

    this.renderMVLists();

    this.renderArtist();

    this.renderTabExplore();

    this.renderRadio();

    this.handleOnclickNavbarItem();

    this.handleOnclickSidebarNavItem();
  },
};

app.start();
