!function($) {
    "undefined" != typeof NodeList && NodeList.prototype && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach),
    document.querySelectorAll(".ga-ce").forEach((function(e, i) {
        e.addEventListener("click", (function() {
            var category = this.dataset.category ? this.dataset.category : null
              , action = this.dataset.action ? this.dataset.action : null
              , label = this.dataset.label ? this.dataset.label : null
              , value = this.dataset.value ? this.dataset.value : 1;
            window.ga && ga.create && ga("send", "event", category, action, label, value, null)
        }
        ))
    }
    ));
    ({
        triggers: $(".share-popup"),
        init: function() {
            var self = this;
            self.triggers.click((function(e) {
                e.preventDefault(),
                self.popup($(this).attr("href"))
            }
            ))
        },
        popup: function(target) {
            popupWindow = window.open(target, "", "width=600,height=400"),
            popupWindow.focus()
        }
    }).init();
    var system = {
        view: $(".screen"),
        bios: $(".screen .bios"),
        started: !1,
        loading: {
            audio: !1,
            video: !1
        },
        ambientAudio: new Audio("sound/ambient.mp3"),
        audioPlayer: document.createElement("audio"),
        text: ["<p>POTUS OS</p><p>Copyright (c) 2049, 2050. All Rights Reserved</p><p>BIOS Version: 204901201 Revision 04 Beta 8</p><br />", "<p>Initializing USB Controllers ... Done</p>", "<p>Memory Test: 16384K OK</p><br /><br />", "<p>Press Any Key to boot system</p>"],
        init: function() {
            var self = this;
            self.setBodyHeight();
            var agent = navigator.userAgent.toLowerCase();
            self.isIPhone = -1 != agent.indexOf("iphone"),
            self.displayTime(),
            setTimeout((function() {
                self.boot()
            }
            ), 100),
            $(window).on("keyup click", (function(e) {
                system.started || (self.bios.hide(),
                self.setLoading(!0),
                setTimeout((function() {
                    $(".login").addClass("loaded"),
                    self.setLoading(!1)
                }
                ), 1500),
                self.isIPhone || (self.ambientAudio.play(),
                $(self.ambientAudio).animate({
                    volume: .2
                }, 3e3)),
                system.started = !0)
            }
            )),
            self.ambientAudio.loop = !0,
            self.ambientAudio.volume = 0,
            self.ambientAudio.addEventListener("timeupdate", (function() {
                this.currentTime > this.duration - .44 && (this.currentTime = 0,
                this.play())
            }
            )),
            $(self.audioPlayer).on("ended", (function() {
                self.stopTrack()
            }
            )),
            $(self.audioPlayer).on("stalled", (function() {
                this.load()
            }
            )),
            $("#video").on("stalled", (function() {
                this.load()
            }
            )),
            "mediaSession"in navigator && (navigator.mediaSession.setActionHandler("pause", ()=>{
                self.pauseTrack()
            }
            ),
            navigator.mediaSession.setActionHandler("play", ()=>{
                self.resumeTrack()
            }
            ),
            navigator.mediaSession.setActionHandler("seekto", details=>{
                self.audioPlayer.currentTime = details.seekTime
            }
            ))
        },
        setBodyHeight: function() {
            $("body").css("height", window.innerHeight),
            setTimeout(this.setBodyHeight, 100)
        },
        setLoading: function(state) {
            state ? $("body").addClass("loading") : $("body").removeClass("loading")
        },
        formatAMPM: function(date) {
            var hours = date.getHours()
              , minutes = date.getMinutes()
              , ampm = hours >= 12 ? "PM" : "AM";
            return (hours = (hours %= 12) || 12) + ":" + (minutes = minutes < 10 ? "0" + minutes : minutes) + ampm + "<span> - " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + ". " + date.getDate() + ", 2049</span>"
        },
        displayTime: function() {
            var self = this
              , time = self.formatAMPM(new Date);
            $("#time").html(time),
            setTimeout((function() {
                self.displayTime()
            }
            ), 1e3)
        },
        boot: function() {
            var self = this;
            self.isIPhone && $(".hide-on-ios").hide(),
            $("body").addClass("crt"),
            self.view.fadeIn(100, (function() {
                $.each(self.text, (function(i, e) {
                    setTimeout((function() {
                        self.bios.append(e)
                    }
                    ), 500 * i)
                }
                ))
            }
            ))
        },
        toggleAmbientSound: function(status) {
            status ? $(this.ambientAudio).animate({
                volume: .2
            }, 3e3) : $(this.ambientAudio).animate({
                volume: 0
            }, 8e3)
        },
        loadTrack: function(item) {
            var self = this;
            self.loading.video = !1,
            self.loading.audio = !1,
            self.setLoading(!0),
            $(self.audioPlayer).on("canplay", (function() {
                self.playTrack("audio")
            }
            )),
            $("#video").on("canplay", (function() {
                self.playTrack("video")
            }
            )),
            self.playingTrack = item,
            item.addClass("active playing");
            var track = item.attr("data-sound")
              , video = item.attr("data-video")
              , title = item.attr("data-title");
            $("#video .mpeg").attr("src", "video/" + video + ".mp4"),
            $("#video .webm").attr("src", "video/" + video + ".webm"),
            $("#video").get(0).load(),
            self.audioPlayer.src = "sound/" + track,
            self.audioPlayer.load(),
            "mediaSession"in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
                title: title,
                artist: "Toasty Digital",
                album: "KANYE2049",
                artwork: [{
                    src: "img/cover/96x96.png",
                    sizes: "96x96",
                    type: "image/png"
                }, {
                    src: "img/cover/128x128.png",
                    sizes: "128x128",
                    type: "image/png"
                }, {
                    src: "img/cover/192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                }, {
                    src: "img/cover/256x256.png",
                    sizes: "256x256",
                    type: "image/png"
                }, {
                    src: "img/cover/384x384.png",
                    sizes: "384x384",
                    type: "image/png"
                }, {
                    src: "img/cover/512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }]
            }))
        },
        playTrack: function(media) {
            "audio" == media && (this.loading.audio = !0),
            "video" == media && (this.loading.video = !0),
            this.loading.audio && this.loading.video && (this.setLoading(!1),
            this.resumeTrack(),
            $("body").addClass("media-playing"))
        },
        stopTrack: function() {
            $(this.audioPlayer).unbind("canplay"),
            $("#video").unbind("canplay"),
            $("body").removeClass("media-playing"),
            $("#video").stop(!0, !0).fadeOut(800),
            setTimeout((function() {
                $("#video").get(0).pause()
            }
            ), 800),
            this.audioPlayer.pause(),
            this.playingTrack.removeClass("active playing")
        },
        pauseTrack: function() {
            $("#video").get(0).pause(),
            this.audioPlayer.pause()
        },
        resumeTrack: function() {
            $("#video").stop(!0, !0).fadeIn(800),
            $("#video").get(0).play(),
            this.audioPlayerPromise = this.audioPlayer.play()
        }
    };
    system.init(),
    $(".login .hint a").on("click", (function(e) {
        e.preventDefault(),
        $(this).parent(".hint").find("a").hide(),
        $(this).parent(".hint").find("span").show()
    }
    )),
    $(".login form").on("submit", (function(e) {
        e.preventDefault();
        var value = $(".login form input[type=password]").val().toLowerCase();
        ["dGhlIGNvbGxlZ2UgZHJvcG91dA==", "bGF0ZSByZWdpc3RyYXRpb24=", "Z3JhZHVhdGlvbg==", "ODA4ICYgaGVhcnRicmVhaw==", "bXkgYmVhdXRpZnVsIGRhcmsgdHdpc3RlZCBmYW50YXN5", "eWVlenVz", "dGhlIGxpZmUgb2YgcGFibG8=", "eWU=", "amVzdXMgaXMga2luZw==", "eWFuZGhp", "dHVyYm9ncmFmeCAxNg==", "Z29vZCBhc3Mgam9i", "Y3J1ZWwgd2ludGVy", "Y3J1ZWwgc3VtbWVy", "c28gaGVscCBtZSBnb2Q=", "c3dpc2g=", "d2F2ZXM=", "bG92ZSBldmVyeW9uZQ=="].includes(btoa(value)) ? ($(".login").removeClass("loaded"),
        setTimeout((function() {
            $(".login").hide(),
            system.toggleAmbientSound(!1),
            system.setLoading(!1)
        }
        ), 1800)) : $(".login form input[type=password]").val("")
    }
    )),
    $(".navbar .item.submenu button").on("click", (function(e) {
        $(this).parent(".submenu").hasClass("active") ? $(".navbar .item.submenu.active").removeClass("active") : ($(".navbar .item.submenu.active").removeClass("active"),
        $(this).parent(".submenu").addClass("active"))
    }
    )),
    $("body").on("click", (function(e) {
        $(e.target).closest(".item.submenu.active").length <= 0 && $(".navbar .item.submenu.active").removeClass("active"),
        $(e.target).closest(".dialog, .navbar").length <= 0 && $(".dialog").css("display", "none").html(""),
        $(".file").removeClass("active")
    }
    )),
    $(".disabled").on("click", (function(e) {
        e.preventDefault()
    }
    )),
    $("#about").on("click", (function(e) {
        e.preventDefault(),
        $(".navbar .item.submenu.active").removeClass("active");
        $(".dialog").html('<div><p>Mixtape by <a href="https://twitter.com/jonsantoast" target="_blank">toasty digital</a><br />Website by <a href="https://twitter.com/starfennec" target="_blank">starfennec</a><br />Funny dancing lizard by <a href="https://twitter.com/ka92/" target="_blank">ka92</a></p></div>').css("display", "flex")
    }
    )),
    $("#battery").on("click", (function(e) {
        e.preventDefault(),
        $(".navbar .item.submenu.active").removeClass("active");
        $(".dialog").html("<div><p>Battery power courtesy of Tesla Petroleum. Tesla Petroleum is not liable for any burns, explosions, or airborne carcinogens caused by this battery pack. Battery pack is single use; Do not attempt to recycle.</p></div>").css("display", "flex")
    }
    )),
    $("#fullscreen").on("click", (function(e) {
        e.preventDefault(),
        $(".navbar .item.submenu.active").removeClass("active");
        var elem = document.documentElement;
        $("body").hasClass("fullscreen") ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen(),
        $("body").removeClass("fullscreen")) : (elem.requestFullscreen ? elem.requestFullscreen() : elem.mozRequestFullScreen ? elem.mozRequestFullScreen() : elem.webkitRequestFullscreen ? elem.webkitRequestFullscreen() : elem.msRequestFullscreen && elem.msRequestFullscreen(),
        $("body").addClass("fullscreen"))
    }
    )),
    $("#restart").on("click", (function(e) {
        e.preventDefault(),
        location.reload()
    }
    )),
    $("#print").on("click", (function(e) {
        $(".navbar .item.submenu.active").removeClass("active"),
        e.preventDefault(),
        window.print()
    }
    )),
    $("#switchfiles").on("click", (function(e) {
        e.preventDefault(),
        $(".navbar .item.submenu.active").removeClass("active"),
        $(this).toggleClass("invert"),
        $("body").toggleClass("show-hidden-files")
    }
    )),
    $("#folder1").on("click", (function(e) {
        e.preventDefault(),
        $(".finder.2k49").addClass("focus").show("slow"),
        $(this).addClass("active")
    }
    )),
    $("#folder2").on("click", (function(e) {
        e.preventDefault(),
        $(this).addClass("active"),
        setTimeout((function() {
            $(".dialog").html("<div><p>File corrupted!<br />Please download it again.</p></div>").css("display", "flex")
        }
        ), 0),
        $(this).addClass("active")
    }
    )),
    $("#lizard").on("click", (function(e) {
        e.preventDefault(),
        $("#video2").get(0).play(),
        $(".finder.fdl").addClass("focus").show()
    }
    )),
    $("#readme").on("click", (function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        $(".finder.readme").addClass("focus").show("slow")
    }
    )),
    $("#earththt").on("click", (function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        $(".finder.earth").addClass("focus").show("slow")
    }
    )),
    $(".finder .close").on("click", (function(e) {
        e.preventDefault(),
        $(this).closest(".finder").hide()
    }
    )),
    $(".play-track").on("click", (function(e) {
        e.preventDefault();
        var item = $(this);
        item.hasClass("playing") || (system.setLoading(!0),
        system.playingTrack ? (system.stopTrack(),
        setTimeout((function() {
            system.loadTrack(item)
        }
        ), 800)) : system.loadTrack(item))
    }
    )),
    $("#pause").on("click", (function(e) {
        e.preventDefault(),
        system.audioPlayer.paused ? ($(this).removeClass("invert"),
        system.resumeTrack()) : ($(this).addClass("invert"),
        system.pauseTrack())
    }
    )),
    $("#stop").on("click", (function(e) {
        e.preventDefault(),
        $("body").removeClass("media-playing"),
        system.stopTrack()
    }
    )),
    $(".finder").on("mousedown click", (function(e) {
        $(".finder.focus").removeClass("focus"),
        $(this).addClass("focus")
    }
    )),
    $(".finder").each((function(i, e) {
        !function(elmnt) {
            var pos1 = 0
              , pos2 = 0
              , pos3 = 0
              , pos4 = 0;
            $(elmnt).find(".header").get(0) ? ($(elmnt).find(".header").get(0).onmousedown = dragMouseDown,
            $(elmnt).find(".header").get(0).ontouchstart = dragMouseDown) : (elmnt.onmousedown = dragMouseDown,
            elmnt.ontouchstart = dragMouseDown);
            function dragMouseDown(e) {
                if ((e = e || window.event).cancelable,
                e.touches)
                    var clientX = e.touches[0].pageX
                      , clientY = e.touches[0].pageY;
                else
                    clientX = e.clientX,
                    clientY = e.clientY;
                pos3 = clientX,
                pos4 = clientY,
                document.onmouseup = closeDragElement,
                document.ontouchend = closeDragElement,
                document.onmousemove = elementDrag,
                document.ontouchmove = elementDrag
            }
            function elementDrag(e) {
                if ((e = e || window.event).cancelable && e.preventDefault(),
                e.touches)
                    var clientX = e.touches[0].pageX
                      , clientY = e.touches[0].pageY;
                else
                    clientX = e.clientX,
                    clientY = e.clientY;
                pos1 = pos3 - clientX,
                pos2 = pos4 - clientY,
                pos3 = clientX,
                pos4 = clientY;
                var posY = elmnt.offsetTop - pos2 >= 28 ? elmnt.offsetTop - pos2 : 28
                  , posX = elmnt.offsetLeft - pos1 >= 0 ? elmnt.offsetLeft - pos1 : 0;
                elmnt.style.top = posY + "px",
                elmnt.style.left = posX + "px"
            }
            function closeDragElement() {
                document.onmouseup = null,
                document.ontouchend = null,
                document.onmousemove = null,
                document.ontouchmove = null
            }
        }(e)
    }
    ))
}();

const system = {
    view: ".screen",
    bios: ".screen .bios",
    started: !1,
    loading: {
        audio: !1,
        video: !1
    },
    ambientAudio: new Audio("sound/you_are_i_am.mp3"),
    audioPlayer: document.createElement("audio"),
    text: ["<p>POTUS OS</p><p>Copyright (c) 2049, 2050. All Rights Reserved</p><p>BIOS Version: 204901201 Revision 04 Beta 8</p><br />", "<p>Initializing USB Controllers ... Done</p>", "<p>Memory Test: 16384K OK</p><br /><br />", "<p>Press Any Key to boot system</p>"],
    init: function() {
        var self = this;
        self.setBodyHeight();
        var agent = navigator.userAgent.toLowerCase();
        self.isIPhone = -1 != agent.indexOf("iphone"),
        self.displayTime(),
        setTimeout((function() {
            self.boot()
        }
        ), 100),
        $(window).on("keyup click", (function(e) {
            system.started || (self.bios.hide(),
            self.setLoading(!0),
            setTimeout((function() {
                $(".login").addClass("loaded"),
                self.setLoading(!1)
            }
            ), 1500),
            self.isIPhone || (self.ambientAudio.play(),
            $(self.ambientAudio).animate({
                volume: .2
            }, 3e3)),
            system.started = !0)
        }
        )),
        self.ambientAudio.loop = !0,
        self.ambientAudio.volume = 0,
        self.ambientAudio.addEventListener("timeupdate", (function() {
            this.currentTime > this.duration - .44 && (this.currentTime = 0,
            this.play())
        }
        )),
        $(self.audioPlayer).on("ended", (function() {
            self.stopTrack()
        }
        )),
        $(self.audioPlayer).on("stalled", (function() {
            this.load()
        }
        )),
        $("#video").on("stalled", (function() {
            this.load()
        }
        )),
        "mediaSession"in navigator && (navigator.mediaSession.setActionHandler("pause", ()=>{
            self.pauseTrack()
        }
        ),
        navigator.mediaSession.setActionHandler("play", ()=>{
            self.resumeTrack()
        }
        ),
        navigator.mediaSession.setActionHandler("seekto", details=>{
            self.audioPlayer.currentTime = details.seekTime
        }
        ))
    },
    setBodyHeight: function() {
        $("body").css("height", window.innerHeight),
        setTimeout(this.setBodyHeight, 100)
    },
    setLoading: function(state) {
        state ? $("body").addClass("loading") : $("body").removeClass("loading")
    },
    formatAMPM: function(date) {
        var hours = date.getHours()
          , minutes = date.getMinutes()
          , ampm = hours >= 12 ? "PM" : "AM";
        return (hours = (hours %= 12) || 12) + ":" + (minutes = minutes < 10 ? "0" + minutes : minutes) + ampm + "<span> - " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + ". " + date.getDate() + ", 2049</span>"
    },
    displayTime: function() {
        var self = this
          , time = self.formatAMPM(new Date);
        $("#time").html(time),
        setTimeout((function() {
            self.displayTime()
        }
        ), 1e3)
    },
    boot: function() {
        var self = this;
        self.isIPhone && $(".hide-on-ios").hide(),
        $("body").addClass("crt"),
        self.view.fadeIn(100, (function() {
            $.each(self.text, (function(i, e) {
                setTimeout((function() {
                    self.bios.append(e)
                }
                ), 500 * i)
            }
            ))
        }
        ))
    },
    toggleAmbientSound: function(status) {
        status ? $(this.ambientAudio).animate({
            volume: .2
        }, 3e3) : $(this.ambientAudio).animate({
            volume: 0
        }, 8e3)
    },
    loadTrack: function(item) {
        var self = this;
        self.loading.video = !1,
        self.loading.audio = !1,
        self.setLoading(!0),
        $(self.audioPlayer).on("canplay", (function() {
            self.playTrack("audio")
        }
        )),
        $("#video").on("canplay", (function() {
            self.playTrack("video")
        }
        )),
        self.playingTrack = item,
        item.addClass("active playing");
        var track = item.attr("data-sound")
          , video = item.attr("data-video")
          , title = item.attr("data-title");
        $("#video .mpeg").attr("src", "video/" + video + ".mp4"),
        $("#video .webm").attr("src", "video/" + video + ".webm"),
        $("#video").get(0).load(),
        self.audioPlayer.src = "sound/" + track,
        self.audioPlayer.load(),
        "mediaSession"in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
            title: title,
            artist: "Toasty Digital",
            album: "KANYE2049",
            artwork: [{
                src: "img/cover/96x96.png",
                sizes: "96x96",
                type: "image/png"
            }, {
                src: "img/cover/128x128.png",
                sizes: "128x128",
                type: "image/png"
            }, {
                src: "img/cover/192x192.png",
                sizes: "192x192",
                type: "image/png"
            }, {
                src: "img/cover/256x256.png",
                sizes: "256x256",
                type: "image/png"
            }, {
                src: "img/cover/384x384.png",
                sizes: "384x384",
                type: "image/png"
            }, {
                src: "img/cover/512x512.png",
                sizes: "512x512",
                type: "image/png"
            }]
        }))
    },
    playTrack: function(media) {
        "audio" == media && (this.loading.audio = !0),
        "video" == media && (this.loading.video = !0),
        this.loading.audio && this.loading.video && (this.setLoading(!1),
        this.resumeTrack(),
        $("body").addClass("media-playing"))
    },
    stopTrack: function() {
        $(this.audioPlayer).unbind("canplay"),
        $("#video").unbind("canplay"),
        $("body").removeClass("media-playing"),
        $("#video").stop(!0, !0).fadeOut(800),
        setTimeout((function() {
            $("#video").get(0).pause()
        }
        ), 800),
        this.audioPlayer.pause(),
        this.playingTrack.removeClass("active playing")
    },
    pauseTrack: function() {
        $("#video").get(0).pause(),
        this.audioPlayer.pause()
    },
    resumeTrack: function() {
        $("#video").stop(!0, !0).fadeIn(800),
        $("#video").get(0).play(),
        this.audioPlayerPromise = this.audioPlayer.play()
    }
};

export { system };
