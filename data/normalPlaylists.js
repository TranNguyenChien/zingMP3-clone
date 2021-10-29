const listNormalPlaylist = [
  // {
  //     header: "",
  //     playlists: [
  //         {
  //             name: "",
  //             artists: ["", "", ""],
  //             image: "/assets/images/tabExplore/normalPlaylists/playlistList1/playlist1.jpg"
  //         },
  //         {
  //             name: "",
  //             artists: ["", "", ""],
  //             image: "/assets/images/tabExplore/normalPlaylists/playlistList1/playlist2.jpg"
  //         },
  //         {
  //             name: "",
  //             artists: ["", "", ""],
  //             image: "/assets/images/tabExplore/normalPlaylists/playlistList1/playlist3.jpg"
  //         },
  //         {
  //             name: "",
  //             artists: ["", "", ""],
  //             image: "/assets/images/tabExplore/normalPlaylists/playlistList1/playlist4.jpg"
  //         },
  //         {
  //             name: "",
  //             artists: ["", "", ""],
  //             image: "/assets/images/tabExplore/normalPlaylists/playlistList1/playlist5.jpg"
  //         },
  //     ],
  // },
];

const NORMAL_PLAYLIST_STORAGE_KEY = "VIK_NORMAL_PLAYLIST";

localStorage.setItem(
  NORMAL_PLAYLIST_STORAGE_KEY,
  JSON.stringify(listNormalPlaylist)
);
normalPlayList.innerHTML = this.normalPlayLists
  .map((normal, playindex) => {})
  .join("");
const htmls = `
          <div class="col l-12 m-12 c-12 mb-16">
            <div class="container__header">
              <a href="#" class="container__header-title">
                <h3>${app.normalPlayLists[normalIndex].header}</h3>
              </a>
            </div>
          </div>
          <div class="col l-12 m-12 c-12">
            <div class="row no-wrap normal-playlist--container">
              ${app.normalPlayLists[normalIndex].playlists
                .map((playlist, index) => {
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
                                <i class="btn--icon icon--heart icon ic-like-full"></i>
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
                                      (normalIndex != 1 &&
                                        normalIndex != 2 &&
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
