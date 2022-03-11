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
const slideSingerExplore = $$(".singer-slide--container");
const chartContainer = $$(".chart--container");
const following = $$(".story--container");
const headerEvent = $(".header");
const appContainer = $$(".app__container");
const sidebarEvent = $(".sidebar__subnav");
const sidebarSubNav = $(".sidebar__subnav");
const titleItems = $$(".title__item");
const thumbImgs = $$(".thumb-img");
const audio = $("#audio");
const inforAuthor = $$(".player__song-author");
const player = $(".player");
const contentNavBar = $$(".content__navbar-item");
const tabContainers = $$(".container__tab");
const sidebarNavItem = $$(".sidebar__nav-item");
const appContainers = $$(".app__container");
const progress = $$("#progress");
const progressTracks = $$(
  ".progress__track.song--track .progress__track-update"
);
const volumeRange = $(".volume__range");
const seekVolume = $(".progress__track.volume--track .progress__track-update");
const nextsong = $(".btn-next");
const prevsong = $(".btn-prev");
const btnRepeat = $(".btn-repeat");
const btnRandom = $(".btn-random ");
const trackTime = $(".tracktime");

// console.log(itemPlaylists);

const app = {
  currentIndex: 0,
  currentPlayList: 0, //Create a starting value
  isPlay: false,
  isChangeVolume: false,
  isRandom: false,
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
  labelExplores: JSON.parse(localStorage.getItem(LABEL_STORAGE_KEY) || "[]"),
  singerSlice: JSON.parse(
    localStorage.getItem(SINGER_SLIDE_STORAGE_KEY) || "[]"
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
  followingList: JSON.parse(localStorage.getItem(POST_STORAGE_KEY) || "[]"),

  //Render Song
  rederListSong: function () {
    this.songs = this.songPlayLists[this.currentIndex];

    songLists.forEach((songList, songIndex) => {
      songList.innerHTML = this.songs
        .map((song, index) => {
          return `
        <div class="playlist__list-song media ${
          app.currentPlayList === index ? "active" : ""
        }" data-index="${index}">
            <div class="playlist__song-info media__left">
              ${
                app.currentPlayList === songIndex
                  ? ""
                  : `<div class="playlist__song-check">
                  <input type="checkbox" name="" id="playlist__check-${index}" class="mr-10" style="display: none">
                  <label for="playlist__check-${index}"></label>
              </div>
              <i class="icon ic-song mr-10"></i>`
              }
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
      normalPlayList.innerHTML = this.normalPlayLists
        .map((normal, index) => {
          let htmls = `
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
                                    ${playlist.artists.map((artist) => {
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
                                    })}
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
          if (normalIndex === 0) {
            if (index < 3) {
              return htmls;
            }
          } else if (normalIndex === 1) {
            if (index === 3) {
              return htmls;
            }
          } else if (normalIndex === 2) {
            if (index === 4) {
              return htmls;
            }
          } else if (normalIndex === 3) {
            if (index === 5) {
              return htmls;
            }
          } else {
            if (index === 6) {
              return htmls;
            }
          }
        })
        .join("");
    });

    //Render Special playlist
    specialPlaylistsExplore.forEach((specialPlayList, specialIndex) => {
      specialPlayList.innerHTML = this.specialPlayList
        .map((special, index) => {
          let htmls = `
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
              <div class="col l-12 m-12 c-12 mb-16 mb-30">
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
                                                ${playlist.artists.map(
                                                  (artist) => {
                                                    return `
                                                            <a href="#" class="is-ghost">${artist}</a>
                                                        `;
                                                  }
                                                )}
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

          if (specialIndex === 0) {
            if (index === 0) {
              return htmls;
            }
          } else if (specialIndex === 1) {
            if (index === 1 || index === 2) {
              return htmls;
            }
          } else {
            if (index > 2) {
              return htmls;
            }
          }
        })
        .join("");
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

    //render Chart

    //Render Label
    labelExplore.innerHTML = this.labelExplores
      .map((label) => {
        return `
        <div class="col l-4 m-4 c-6 mb-30">
          <div class="row__item item--label">
            <div class="row__item-container flex--top-left">
              <div class="row__item-display br-5">
                <div class="row__item-img img--label" style="background: url('${label.image}') no-repeat center center / cover"></div>
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    //Render Slidesinger
    slideSingerExplore.forEach((slideSinger, index) => {
      slideSinger.innerHTML = this.singerSlice
        .map((singerslice) => {
          return `
          <div class="singer__slide-move hide-on-mobile">
            <div class="slide__move-btn btn--prev button--disabled">
              <i class="icon ic-go-left"></i>
            </div>
            <div class="slide__move-btn btn--next">
              <i class="icon ic-go-right"></i>
            </div>
          </div>
          <div class="col l-2-4 m-3 c-4 row-item singer__slide-item">
            <div class="row__item-display">
              <div class="singer__slide-img img--singer-slide" style="background: url('${singerslice.image}') no-repeat center center / cover"></div>
            </div>
          </div>      
        `;
        })
        .join("");
    });

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

  //Render Radio
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

  //render Follow
  renderFollow: function () {
    following.forEach((follow, postIndex) => {
      follow.innerHTML = this.followingList[postIndex].map((post, index) => {
        return `
                <div class="story__item mb-30">
                  <div class="story__item-container">
                    <div class="story__item-header">
                      <div class="row__item-info media story__header-info">
                        <div class="media__left">
                          <div class="media__thumb is-rounded mr-10" style="background: url('${
                            post.authorAvatar
                          }') no-repeat center center / cover"></div>
                          <div class="media__info">
                            <div class="media__info-header">
                              <div class="info__title is-active is-oneline">${
                                post.name
                              }</div>
                              <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                              <span class="follow-btn">Quan tâm</span>
                            </div>
                            <p class="info__time">
                              <a href="#" class="is-active">${post.time}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="story__header-content">
                        <span>${post.content}</span>
                      </div>
                    </div>
                  <div class="row__item-display br-5 story__item-display">
                    <div
                        class=" story__item-img ${
                          postIndex === 0 && index < 2 && "img--rec"
                        }
                        ${postIndex === 0 && index === 2 && "img--rec-vertical"}
                        ${postIndex === 0 && index === 3 && "img--square"}
                        ${postIndex === 0 && index === 4 && "img--rec"}
                        ${postIndex === 1 && index < 4 && "img--square"}
                        ${postIndex === 1 && index === 4 && "img--rec"}"
                        style="background: url('${
                          post.image
                        }') no-repeat center center / cover">
                    </div>
                  </div>
                  <div class="story__item-action">
                    <div class="action-btn story-btn--heart">
                      <i class="btn--icon icon--heart icon ic-like"></i>
                      <span class="action__number">${Math.floor(
                        Math.random() * 1000
                      )}</span>
                    </div>
                    <div class="action-btn story-btn--comment">
                      <i class="btn--icon icon--comment icon ic-comment"></i>
                      <span class="action__number">${Math.floor(
                        Math.random() * 100
                      )}</span>
                    </div>
                  </div>
                </div>
              </div>
            `;
      });
    });
  },

  renderPlayer: function () {},

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentPlayList];
      },
    });
  },

  //load Curent Song
  loadCurrentSong: function () {
    titleItems.forEach((title, index) => {
      title.textContent = `${this.songs[this.currentIndex].name}`;
    });
    inforAuthor.forEach((author, index) => {
      author.textContent = this.songs[this.currentIndex].singer;
    });
    thumbImgs.forEach((thumbImg, index) => {
      thumbImg.style.background = `url('${
        this.songs[this.currentIndex].image
      }')  no-repeat center center / cover`;
    });
    audio.src = `${this.songs[this.currentIndex].path}`;
  },

  //load PlayLists
  loadPlaylists: function () {
    this.songPlayLists.map((songPlaylist, index) => {
      this.songs = songPlaylist;
      console.log();
    });
  },

  //handle Event
  handleEvent: function () {
    const _this = this;
    const iconPlays = $$(".btn--play-song");
    const itemPlaylists = $$(".playlist--container .btn--play-playlist");

    const cdthumbAnimate = $(".player__song-thumb .thumb-img").animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 15000,
        iterations: Infinity,
      }
    );

    cdthumbAnimate.pause();

    //ScrollTop sidebarSubNav
    sidebarEvent.addEventListener("scroll", () => {
      const scrollTop = sidebarEvent.scrollY || sidebarEvent.scrollTop;
      if (scrollTop > 5) {
        sidebarSubNav.classList.add("has-mask");
      } else {
        sidebarSubNav.classList.remove("has-mask");
      }
    });

    //scrollTop HeaderEvent
    appContainer.forEach((app) => {
      app.addEventListener("scroll", () => {
        const scrollTop = app.scrollY || app.scrollTop;
        if (scrollTop > 10) {
          Object.assign(headerEvent.style, {
            backgroundColor: "var(--layout-bg)",
            boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
          });
        } else {
          Object.assign(headerEvent.style, {
            backgroundColor: "transparent",
            boxShadow: "none",
          });
        }
      });
    });

    //Handle onclick on "content__navbar-item"
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

    //Handle onclick on "sidenar__nav-item"
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

    //handle when onlick icon-play
    console.log(iconPlays);
    iconPlays.forEach((iconPlay) => {
      iconPlay.addEventListener("click", () => {
        console.log(iconPlay);
        if (_this.isPlay) {
          audio.pause();
        } else {
          audio.play();
        }
      });
    });

    //when Song play
    audio.addEventListener("play", () => {
      _this.isPlay = true;
      player.classList.add("playing");
      $(".playlist__list-song.active .thumb--animate").style.display = "flex";
      $(".playlist__list-song.active .btn-toggle-play").style.display = "none";
      $(".player__song-info").classList.add("playing");
      cdthumbAnimate.play();
      //text Content track Time
      trackTime.textContent = this.songs[this.currentIndex].duration;
      console.log(trackTime);
    });

    //when song pause
    audio.addEventListener("pause", () => {
      _this.isPlay = false;
      player.classList.remove("playing");
      $(".playlist__list-song.active .thumb--animate").style.display = "none";
      $(".playlist__list-song.active .btn-toggle-play").style.display = "flex";
      $(".player__song-info").classList.remove("playing");
      cdthumbAnimate.pause();
    });

    //when the current playback position has changed
    progress.forEach((progressChild) => {
      progressChild.addEventListener("input", (e) => {
        const seekTime = (audio.duration * e.target.value) / 100;
        audio.currentTime = seekTime;
      });
    });

    //when seek song
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        progress.forEach((progressChild) => {
          progressChild.value = Math.round(
            (audio.currentTime / audio.duration) * 100
          );
        });
        progressTracks.forEach((progressTrack) => {
          progressTrack.style.width =
            Math.round((audio.currentTime / audio.duration) * 100) + "%";
        });
      }
    });

    //when control volume
    volumeRange.addEventListener("input", (e) => {
      const changeVolume = e.target.value / 100;

      audio.volume = changeVolume;
      console.log(changeVolume);

      seekVolume.style.width = changeVolume * 100 + "%";
    });

    //When click volume
    $(".volume").addEventListener("click", () => {});

    //handle event nextSong
    nextsong.addEventListener("click", () => {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
    });

    //preview Song
    prevsong.addEventListener("click", () => {
      _this.prevSong();
      $(".playlist__list-song.active").classList.remove("active");
      $(".playlist__list-song").classList.add("active");
      audio.play();
    });

    //random Song
    btnRandom.addEventListener("click", () => {
      _this.isRandom = !_this.isRandom;
      btnRandom.classList.toggle("active", _this.isRandom);
    });

    //handle onclick change item-playlist
    itemPlaylists.forEach((itemPlaylist, index) => {
      itemPlaylist.addEventListener("click", () => {
        _this.currentIndex = index;
        console.log(_this.currentIndex);
        _this.rederListSong();
      });
    });

    //text Content track Time
    trackTime.textContent = this.songs[this.currentIndex].duration;
  },

  //next Song
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }

    trackTime.textContent = this.songs[this.currentIndex].duration;
    this.loadCurrentSong();
  },
  //prev Song
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }

    //text Content track Time
    trackTime.textContent = this.songs[this.currentIndex].duration;
    this.loadCurrentSong();
  },

  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;

    //text Content track Time
    trackTime.textContent = this.songs[this.currentIndex].duration;
    this.loadCurrentSong();
  },

  start: function () {
    this.rederListSong();

    this.renderPlayLists();

    this.handleEvent();

    this.renderAlbumList();

    this.renderMVLists();

    this.renderArtist();

    this.renderTabExplore();

    this.renderRadio();

    this.renderFollow();

    //defined Properties
    this.defineProperties();

    this.loadCurrentSong();

    this.loadPlaylists();
  },
};

app.start();
