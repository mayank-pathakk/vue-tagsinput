!(function(e) {
  var t = {};
  function i(a) {
    if (t[a]) return t[a].exports;
    var s = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          i.d(
            a,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
          );
      return a;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/dist/"),
    i((i.s = 1));
})([
  function(e, t, i) {
    var a, s;
    void 0 ===
      (s =
        "function" ==
        typeof (a = function() {
          function e(t) {
            return "string" == typeof t
              ? t.replace(/[^A-Za-z0-9]/g, function(t) {
                  return e.characters[t] || t;
                })
              : t;
          }
          return (
            (e.characters = {
              Á: "A",
              Ă: "A",
              Ắ: "A",
              Ặ: "A",
              Ằ: "A",
              Ẳ: "A",
              Ẵ: "A",
              Ǎ: "A",
              Â: "A",
              Ấ: "A",
              Ậ: "A",
              Ầ: "A",
              Ẩ: "A",
              Ẫ: "A",
              Ä: "A",
              Ǟ: "A",
              Ȧ: "A",
              Ǡ: "A",
              Ạ: "A",
              Ȁ: "A",
              À: "A",
              Ả: "A",
              Ȃ: "A",
              Ā: "A",
              Ą: "A",
              Å: "A",
              Ǻ: "A",
              Ḁ: "A",
              Ⱥ: "A",
              Ã: "A",
              Ꜳ: "AA",
              Æ: "AE",
              Ǽ: "AE",
              Ǣ: "AE",
              Ꜵ: "AO",
              Ꜷ: "AU",
              Ꜹ: "AV",
              Ꜻ: "AV",
              Ꜽ: "AY",
              Ḃ: "B",
              Ḅ: "B",
              Ɓ: "B",
              Ḇ: "B",
              Ƀ: "B",
              Ƃ: "B",
              Ć: "C",
              Č: "C",
              Ç: "C",
              Ḉ: "C",
              Ĉ: "C",
              Ċ: "C",
              Ƈ: "C",
              Ȼ: "C",
              Ď: "D",
              Ḑ: "D",
              Ḓ: "D",
              Ḋ: "D",
              Ḍ: "D",
              Ɗ: "D",
              Ḏ: "D",
              ǲ: "D",
              ǅ: "D",
              Đ: "D",
              Ð: "D",
              Ƌ: "D",
              Ǳ: "DZ",
              Ǆ: "DZ",
              É: "E",
              Ĕ: "E",
              Ě: "E",
              Ȩ: "E",
              Ḝ: "E",
              Ê: "E",
              Ế: "E",
              Ệ: "E",
              Ề: "E",
              Ể: "E",
              Ễ: "E",
              Ḙ: "E",
              Ë: "E",
              Ė: "E",
              Ẹ: "E",
              Ȅ: "E",
              È: "E",
              Ẻ: "E",
              Ȇ: "E",
              Ē: "E",
              Ḗ: "E",
              Ḕ: "E",
              Ę: "E",
              Ɇ: "E",
              Ẽ: "E",
              Ḛ: "E",
              Ꝫ: "ET",
              Ḟ: "F",
              Ƒ: "F",
              Ǵ: "G",
              Ğ: "G",
              Ǧ: "G",
              Ģ: "G",
              Ĝ: "G",
              Ġ: "G",
              Ɠ: "G",
              Ḡ: "G",
              Ǥ: "G",
              Ḫ: "H",
              Ȟ: "H",
              Ḩ: "H",
              Ĥ: "H",
              Ⱨ: "H",
              Ḧ: "H",
              Ḣ: "H",
              Ḥ: "H",
              Ħ: "H",
              Í: "I",
              Ĭ: "I",
              Ǐ: "I",
              Î: "I",
              Ï: "I",
              Ḯ: "I",
              İ: "I",
              Ị: "I",
              Ȉ: "I",
              Ì: "I",
              Ỉ: "I",
              Ȋ: "I",
              Ī: "I",
              Į: "I",
              Ɨ: "I",
              Ĩ: "I",
              Ḭ: "I",
              Ꝺ: "D",
              Ꝼ: "F",
              Ᵹ: "G",
              Ꞃ: "R",
              Ꞅ: "S",
              Ꞇ: "T",
              Ꝭ: "IS",
              Ĵ: "J",
              Ɉ: "J",
              Ḱ: "K",
              Ǩ: "K",
              Ķ: "K",
              Ⱪ: "K",
              Ꝃ: "K",
              Ḳ: "K",
              Ƙ: "K",
              Ḵ: "K",
              Ꝁ: "K",
              Ꝅ: "K",
              Ĺ: "L",
              Ƚ: "L",
              Ľ: "L",
              Ļ: "L",
              Ḽ: "L",
              Ḷ: "L",
              Ḹ: "L",
              Ⱡ: "L",
              Ꝉ: "L",
              Ḻ: "L",
              Ŀ: "L",
              Ɫ: "L",
              ǈ: "L",
              Ł: "L",
              Ǉ: "LJ",
              Ḿ: "M",
              Ṁ: "M",
              Ṃ: "M",
              Ɱ: "M",
              Ń: "N",
              Ň: "N",
              Ņ: "N",
              Ṋ: "N",
              Ṅ: "N",
              Ṇ: "N",
              Ǹ: "N",
              Ɲ: "N",
              Ṉ: "N",
              Ƞ: "N",
              ǋ: "N",
              Ñ: "N",
              Ǌ: "NJ",
              Ó: "O",
              Ŏ: "O",
              Ǒ: "O",
              Ô: "O",
              Ố: "O",
              Ộ: "O",
              Ồ: "O",
              Ổ: "O",
              Ỗ: "O",
              Ö: "O",
              Ȫ: "O",
              Ȯ: "O",
              Ȱ: "O",
              Ọ: "O",
              Ő: "O",
              Ȍ: "O",
              Ò: "O",
              Ỏ: "O",
              Ơ: "O",
              Ớ: "O",
              Ợ: "O",
              Ờ: "O",
              Ở: "O",
              Ỡ: "O",
              Ȏ: "O",
              Ꝋ: "O",
              Ꝍ: "O",
              Ō: "O",
              Ṓ: "O",
              Ṑ: "O",
              Ɵ: "O",
              Ǫ: "O",
              Ǭ: "O",
              Ø: "O",
              Ǿ: "O",
              Õ: "O",
              Ṍ: "O",
              Ṏ: "O",
              Ȭ: "O",
              Ƣ: "OI",
              Ꝏ: "OO",
              Ɛ: "E",
              Ɔ: "O",
              Ȣ: "OU",
              Ṕ: "P",
              Ṗ: "P",
              Ꝓ: "P",
              Ƥ: "P",
              Ꝕ: "P",
              Ᵽ: "P",
              Ꝑ: "P",
              Ꝙ: "Q",
              Ꝗ: "Q",
              Ŕ: "R",
              Ř: "R",
              Ŗ: "R",
              Ṙ: "R",
              Ṛ: "R",
              Ṝ: "R",
              Ȑ: "R",
              Ȓ: "R",
              Ṟ: "R",
              Ɍ: "R",
              Ɽ: "R",
              Ꜿ: "C",
              Ǝ: "E",
              Ś: "S",
              Ṥ: "S",
              Š: "S",
              Ṧ: "S",
              Ş: "S",
              Ŝ: "S",
              Ș: "S",
              Ṡ: "S",
              Ṣ: "S",
              Ṩ: "S",
              ß: "ss",
              Ť: "T",
              Ţ: "T",
              Ṱ: "T",
              Ț: "T",
              Ⱦ: "T",
              Ṫ: "T",
              Ṭ: "T",
              Ƭ: "T",
              Ṯ: "T",
              Ʈ: "T",
              Ŧ: "T",
              Ɐ: "A",
              Ꞁ: "L",
              Ɯ: "M",
              Ʌ: "V",
              Ꜩ: "TZ",
              Ú: "U",
              Ŭ: "U",
              Ǔ: "U",
              Û: "U",
              Ṷ: "U",
              Ü: "U",
              Ǘ: "U",
              Ǚ: "U",
              Ǜ: "U",
              Ǖ: "U",
              Ṳ: "U",
              Ụ: "U",
              Ű: "U",
              Ȕ: "U",
              Ù: "U",
              Ủ: "U",
              Ư: "U",
              Ứ: "U",
              Ự: "U",
              Ừ: "U",
              Ử: "U",
              Ữ: "U",
              Ȗ: "U",
              Ū: "U",
              Ṻ: "U",
              Ų: "U",
              Ů: "U",
              Ũ: "U",
              Ṹ: "U",
              Ṵ: "U",
              Ꝟ: "V",
              Ṿ: "V",
              Ʋ: "V",
              Ṽ: "V",
              Ꝡ: "VY",
              Ẃ: "W",
              Ŵ: "W",
              Ẅ: "W",
              Ẇ: "W",
              Ẉ: "W",
              Ẁ: "W",
              Ⱳ: "W",
              Ẍ: "X",
              Ẋ: "X",
              Ý: "Y",
              Ŷ: "Y",
              Ÿ: "Y",
              Ẏ: "Y",
              Ỵ: "Y",
              Ỳ: "Y",
              Ƴ: "Y",
              Ỷ: "Y",
              Ỿ: "Y",
              Ȳ: "Y",
              Ɏ: "Y",
              Ỹ: "Y",
              Ź: "Z",
              Ž: "Z",
              Ẑ: "Z",
              Ⱬ: "Z",
              Ż: "Z",
              Ẓ: "Z",
              Ȥ: "Z",
              Ẕ: "Z",
              Ƶ: "Z",
              Þ: "TH",
              Ĳ: "IJ",
              Œ: "OE",
              ᴀ: "A",
              ᴁ: "AE",
              ʙ: "B",
              ᴃ: "B",
              ᴄ: "C",
              ᴅ: "D",
              ᴇ: "E",
              ꜰ: "F",
              ɢ: "G",
              ʛ: "G",
              ʜ: "H",
              ɪ: "I",
              ʁ: "R",
              ᴊ: "J",
              ᴋ: "K",
              ʟ: "L",
              ᴌ: "L",
              ᴍ: "M",
              ɴ: "N",
              ᴏ: "O",
              ɶ: "OE",
              ᴐ: "O",
              ᴕ: "OU",
              ᴘ: "P",
              ʀ: "R",
              ᴎ: "N",
              ᴙ: "R",
              ꜱ: "S",
              ᴛ: "T",
              ⱻ: "E",
              ᴚ: "R",
              ᴜ: "U",
              ᴠ: "V",
              ᴡ: "W",
              ʏ: "Y",
              ᴢ: "Z",
              á: "a",
              ă: "a",
              ắ: "a",
              ặ: "a",
              ằ: "a",
              ẳ: "a",
              ẵ: "a",
              ǎ: "a",
              â: "a",
              ấ: "a",
              ậ: "a",
              ầ: "a",
              ẩ: "a",
              ẫ: "a",
              ä: "a",
              ǟ: "a",
              ȧ: "a",
              ǡ: "a",
              ạ: "a",
              ȁ: "a",
              à: "a",
              ả: "a",
              ȃ: "a",
              ā: "a",
              ą: "a",
              ᶏ: "a",
              ẚ: "a",
              å: "a",
              ǻ: "a",
              ḁ: "a",
              ⱥ: "a",
              ã: "a",
              ꜳ: "aa",
              æ: "ae",
              ǽ: "ae",
              ǣ: "ae",
              ꜵ: "ao",
              ꜷ: "au",
              ꜹ: "av",
              ꜻ: "av",
              ꜽ: "ay",
              ḃ: "b",
              ḅ: "b",
              ɓ: "b",
              ḇ: "b",
              ᵬ: "b",
              ᶀ: "b",
              ƀ: "b",
              ƃ: "b",
              ɵ: "o",
              ć: "c",
              č: "c",
              ç: "c",
              ḉ: "c",
              ĉ: "c",
              ɕ: "c",
              ċ: "c",
              ƈ: "c",
              ȼ: "c",
              ď: "d",
              ḑ: "d",
              ḓ: "d",
              ȡ: "d",
              ḋ: "d",
              ḍ: "d",
              ɗ: "d",
              ᶑ: "d",
              ḏ: "d",
              ᵭ: "d",
              ᶁ: "d",
              đ: "d",
              ɖ: "d",
              ƌ: "d",
              ð: "d",
              ı: "i",
              ȷ: "j",
              ɟ: "j",
              ʄ: "j",
              ǳ: "dz",
              ǆ: "dz",
              é: "e",
              ĕ: "e",
              ě: "e",
              ȩ: "e",
              ḝ: "e",
              ê: "e",
              ế: "e",
              ệ: "e",
              ề: "e",
              ể: "e",
              ễ: "e",
              ḙ: "e",
              ë: "e",
              ė: "e",
              ẹ: "e",
              ȅ: "e",
              è: "e",
              ẻ: "e",
              ȇ: "e",
              ē: "e",
              ḗ: "e",
              ḕ: "e",
              ⱸ: "e",
              ę: "e",
              ᶒ: "e",
              ɇ: "e",
              ẽ: "e",
              ḛ: "e",
              ꝫ: "et",
              ḟ: "f",
              ƒ: "f",
              ᵮ: "f",
              ᶂ: "f",
              ǵ: "g",
              ğ: "g",
              ǧ: "g",
              ģ: "g",
              ĝ: "g",
              ġ: "g",
              ɠ: "g",
              ḡ: "g",
              ᶃ: "g",
              ǥ: "g",
              ḫ: "h",
              ȟ: "h",
              ḩ: "h",
              ĥ: "h",
              ⱨ: "h",
              ḧ: "h",
              ḣ: "h",
              ḥ: "h",
              ɦ: "h",
              ẖ: "h",
              ħ: "h",
              ƕ: "hv",
              í: "i",
              ĭ: "i",
              ǐ: "i",
              î: "i",
              ï: "i",
              ḯ: "i",
              ị: "i",
              ȉ: "i",
              ì: "i",
              ỉ: "i",
              ȋ: "i",
              ī: "i",
              į: "i",
              ᶖ: "i",
              ɨ: "i",
              ĩ: "i",
              ḭ: "i",
              ꝺ: "d",
              ꝼ: "f",
              ᵹ: "g",
              ꞃ: "r",
              ꞅ: "s",
              ꞇ: "t",
              ꝭ: "is",
              ǰ: "j",
              ĵ: "j",
              ʝ: "j",
              ɉ: "j",
              ḱ: "k",
              ǩ: "k",
              ķ: "k",
              ⱪ: "k",
              ꝃ: "k",
              ḳ: "k",
              ƙ: "k",
              ḵ: "k",
              ᶄ: "k",
              ꝁ: "k",
              ꝅ: "k",
              ĺ: "l",
              ƚ: "l",
              ɬ: "l",
              ľ: "l",
              ļ: "l",
              ḽ: "l",
              ȴ: "l",
              ḷ: "l",
              ḹ: "l",
              ⱡ: "l",
              ꝉ: "l",
              ḻ: "l",
              ŀ: "l",
              ɫ: "l",
              ᶅ: "l",
              ɭ: "l",
              ł: "l",
              ǉ: "lj",
              ſ: "s",
              ẜ: "s",
              ẛ: "s",
              ẝ: "s",
              ḿ: "m",
              ṁ: "m",
              ṃ: "m",
              ɱ: "m",
              ᵯ: "m",
              ᶆ: "m",
              ń: "n",
              ň: "n",
              ņ: "n",
              ṋ: "n",
              ȵ: "n",
              ṅ: "n",
              ṇ: "n",
              ǹ: "n",
              ɲ: "n",
              ṉ: "n",
              ƞ: "n",
              ᵰ: "n",
              ᶇ: "n",
              ɳ: "n",
              ñ: "n",
              ǌ: "nj",
              ó: "o",
              ŏ: "o",
              ǒ: "o",
              ô: "o",
              ố: "o",
              ộ: "o",
              ồ: "o",
              ổ: "o",
              ỗ: "o",
              ö: "o",
              ȫ: "o",
              ȯ: "o",
              ȱ: "o",
              ọ: "o",
              ő: "o",
              ȍ: "o",
              ò: "o",
              ỏ: "o",
              ơ: "o",
              ớ: "o",
              ợ: "o",
              ờ: "o",
              ở: "o",
              ỡ: "o",
              ȏ: "o",
              ꝋ: "o",
              ꝍ: "o",
              ⱺ: "o",
              ō: "o",
              ṓ: "o",
              ṑ: "o",
              ǫ: "o",
              ǭ: "o",
              ø: "o",
              ǿ: "o",
              õ: "o",
              ṍ: "o",
              ṏ: "o",
              ȭ: "o",
              ƣ: "oi",
              ꝏ: "oo",
              ɛ: "e",
              ᶓ: "e",
              ɔ: "o",
              ᶗ: "o",
              ȣ: "ou",
              ṕ: "p",
              ṗ: "p",
              ꝓ: "p",
              ƥ: "p",
              ᵱ: "p",
              ᶈ: "p",
              ꝕ: "p",
              ᵽ: "p",
              ꝑ: "p",
              ꝙ: "q",
              ʠ: "q",
              ɋ: "q",
              ꝗ: "q",
              ŕ: "r",
              ř: "r",
              ŗ: "r",
              ṙ: "r",
              ṛ: "r",
              ṝ: "r",
              ȑ: "r",
              ɾ: "r",
              ᵳ: "r",
              ȓ: "r",
              ṟ: "r",
              ɼ: "r",
              ᵲ: "r",
              ᶉ: "r",
              ɍ: "r",
              ɽ: "r",
              ↄ: "c",
              ꜿ: "c",
              ɘ: "e",
              ɿ: "r",
              ś: "s",
              ṥ: "s",
              š: "s",
              ṧ: "s",
              ş: "s",
              ŝ: "s",
              ș: "s",
              ṡ: "s",
              ṣ: "s",
              ṩ: "s",
              ʂ: "s",
              ᵴ: "s",
              ᶊ: "s",
              ȿ: "s",
              ɡ: "g",
              ᴑ: "o",
              ᴓ: "o",
              ᴝ: "u",
              ť: "t",
              ţ: "t",
              ṱ: "t",
              ț: "t",
              ȶ: "t",
              ẗ: "t",
              ⱦ: "t",
              ṫ: "t",
              ṭ: "t",
              ƭ: "t",
              ṯ: "t",
              ᵵ: "t",
              ƫ: "t",
              ʈ: "t",
              ŧ: "t",
              ᵺ: "th",
              ɐ: "a",
              ᴂ: "ae",
              ǝ: "e",
              ᵷ: "g",
              ɥ: "h",
              ʮ: "h",
              ʯ: "h",
              ᴉ: "i",
              ʞ: "k",
              ꞁ: "l",
              ɯ: "m",
              ɰ: "m",
              ᴔ: "oe",
              ɹ: "r",
              ɻ: "r",
              ɺ: "r",
              ⱹ: "r",
              ʇ: "t",
              ʌ: "v",
              ʍ: "w",
              ʎ: "y",
              ꜩ: "tz",
              ú: "u",
              ŭ: "u",
              ǔ: "u",
              û: "u",
              ṷ: "u",
              ü: "u",
              ǘ: "u",
              ǚ: "u",
              ǜ: "u",
              ǖ: "u",
              ṳ: "u",
              ụ: "u",
              ű: "u",
              ȕ: "u",
              ù: "u",
              ủ: "u",
              ư: "u",
              ứ: "u",
              ự: "u",
              ừ: "u",
              ử: "u",
              ữ: "u",
              ȗ: "u",
              ū: "u",
              ṻ: "u",
              ų: "u",
              ᶙ: "u",
              ů: "u",
              ũ: "u",
              ṹ: "u",
              ṵ: "u",
              ᵫ: "ue",
              ꝸ: "um",
              ⱴ: "v",
              ꝟ: "v",
              ṿ: "v",
              ʋ: "v",
              ᶌ: "v",
              ⱱ: "v",
              ṽ: "v",
              ꝡ: "vy",
              ẃ: "w",
              ŵ: "w",
              ẅ: "w",
              ẇ: "w",
              ẉ: "w",
              ẁ: "w",
              ⱳ: "w",
              ẘ: "w",
              ẍ: "x",
              ẋ: "x",
              ᶍ: "x",
              ý: "y",
              ŷ: "y",
              ÿ: "y",
              ẏ: "y",
              ỵ: "y",
              ỳ: "y",
              ƴ: "y",
              ỷ: "y",
              ỿ: "y",
              ȳ: "y",
              ẙ: "y",
              ɏ: "y",
              ỹ: "y",
              ź: "z",
              ž: "z",
              ẑ: "z",
              ʑ: "z",
              ⱬ: "z",
              ż: "z",
              ẓ: "z",
              ȥ: "z",
              ẕ: "z",
              ᵶ: "z",
              ᶎ: "z",
              ʐ: "z",
              ƶ: "z",
              ɀ: "z",
              þ: "th",
              ﬀ: "ff",
              ﬃ: "ffi",
              ﬄ: "ffl",
              ﬁ: "fi",
              ﬂ: "fl",
              ĳ: "ij",
              œ: "oe",
              ﬆ: "st",
              ₐ: "a",
              ₑ: "e",
              ᵢ: "i",
              ⱼ: "j",
              ₒ: "o",
              ᵣ: "r",
              ᵤ: "u",
              ᵥ: "v",
              ₓ: "x",
              Ё: "YO",
              Й: "I",
              Ц: "TS",
              У: "U",
              К: "K",
              Е: "E",
              Н: "N",
              Г: "G",
              Ш: "SH",
              Щ: "SCH",
              З: "Z",
              Х: "H",
              Ъ: "'",
              ё: "yo",
              й: "i",
              ц: "ts",
              у: "u",
              к: "k",
              е: "e",
              н: "n",
              г: "g",
              ш: "sh",
              щ: "sch",
              з: "z",
              х: "h",
              ъ: "'",
              Ф: "F",
              Ы: "I",
              В: "V",
              А: "a",
              П: "P",
              Р: "R",
              О: "O",
              Л: "L",
              Д: "D",
              Ж: "ZH",
              Э: "E",
              ф: "f",
              ы: "i",
              в: "v",
              а: "a",
              п: "p",
              р: "r",
              о: "o",
              л: "l",
              д: "d",
              ж: "zh",
              э: "e",
              Я: "Ya",
              Ч: "CH",
              С: "S",
              М: "M",
              И: "I",
              Т: "T",
              Ь: "'",
              Б: "B",
              Ю: "YU",
              я: "ya",
              ч: "ch",
              с: "s",
              м: "m",
              и: "i",
              т: "t",
              ь: "'",
              б: "b",
              ю: "yu"
            }),
            e
          );
        })
          ? a.call(t, i, t, e)
          : a) || (e.exports = s);
  },
  function(e, t, i) {
    "use strict";
    i.r(t);
    var a = i(0),
      s = i.n(a);
    function n(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = i),
        e
      );
    }
    var r = (function(e, t, i, a, s, n, r, l) {
      var o,
        h = "function" == typeof e ? e.options : e;
      if (
        (t && ((h.render = t), (h.staticRenderFns = i), (h._compiled = !0)),
        a && (h.functional = !0),
        n && (h._scopeId = "data-v-" + n),
        r
          ? ((o = function(e) {
              (e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (e = __VUE_SSR_CONTEXT__),
                s && s.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(r);
            }),
            (h._ssrRegister = o))
          : s &&
            (o = l
              ? function() {
                  s.call(
                    this,
                    (h.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : s),
        o)
      )
        if (h.functional) {
          h._injectStyles = o;
          var u = h.render;
          h.render = function(e, t) {
            return o.call(t), u(e, t);
          };
        } else {
          var c = h.beforeCreate;
          h.beforeCreate = c ? [].concat(c, o) : [o];
        }
      return { exports: e, options: h };
    })(
      {
        props: {
          elementId: String,
          inputId: String,
          existingTags: {
            type: Array,
            default: function() {
              return [];
            }
          },
          value: {
            type: Array,
            default: function() {
              return [];
            }
          },
          idField: { type: String, default: "key" },
          textField: { type: String, default: "value" },
          displayField: { type: String, default: null },
          valueFields: { type: String, default: null },
          disabled: { type: Boolean, default: !1 },
          typeahead: { type: Boolean, default: !1 },
          typeaheadStyle: { type: String, default: "badges" },
          typeaheadActivationThreshold: { type: Number, default: 1 },
          typeaheadMaxResults: { type: Number, default: 0 },
          typeaheadAlwaysShow: { type: Boolean, default: !1 },
          typeaheadShowOnFocus: { type: Boolean, default: !0 },
          typeaheadHideDiscard: { type: Boolean, default: !1 },
          typeaheadUrl: { type: String, default: "" },
          typeaheadCallback: { type: Function, default: null },
          placeholder: { type: String, default: "Add a tag" },
          discardSearchText: {
            type: String,
            default: "Discard Search Results"
          },
          limit: { type: Number, default: 0 },
          hideInputOnLimit: { type: Boolean, default: !1 },
          onlyExistingTags: { type: Boolean, default: !1 },
          deleteOnBackspace: { type: Boolean, default: !0 },
          allowDuplicates: { type: Boolean, default: !1 },
          validate: {
            type: Function,
            default: function() {
              return !0;
            }
          },
          addTagsOnComma: { type: Boolean, default: !1 },
          addTagsOnSpace: { type: Boolean, default: !1 },
          addTagsOnBlur: { type: Boolean, default: !1 },
          wrapperClass: { type: String, default: "tags-input-wrapper-default" },
          sortSearchResults: { type: Boolean, default: !0 },
          caseSensitiveTags: { type: Boolean, default: !1 },
          acccentSensitiveTags: { type: Boolean, default: !1 },
          beforeAddingTag: {
            type: Function,
            default: function() {
              return !0;
            }
          },
          beforeRemovingTag: {
            type: Function,
            default: function() {
              return !0;
            }
          }
        },
        data: function() {
          return {
            badgeId: 0,
            tags: [],
            input: "",
            oldInput: "",
            hiddenInput: "",
            searchResults: [],
            searchSelection: 0,
            selectedTag: -1,
            isActive: !1,
            composing: !1
          };
        },
        created: function() {
          (this.typeaheadTags = this.cloneArray(this.existingTags)),
            this.tagsFromValue(),
            this.typeaheadAlwaysShow && this.searchTag(!1);
        },
        mounted: function() {
          var e = this;
          this.$emit("initialized"),
            document.addEventListener("click", function(t) {
              t.target !== e.$refs.taginput && e.clearSearchResults();
            });
        },
        computed: {
          hideInputField: function() {
            return (
              (this.hideInputOnLimit &&
                this.limit > 0 &&
                this.tags.length >= this.limit) ||
              this.disabled
            );
          }
        },
        watch: {
          input: function(e, t) {
            if ((this.searchTag(!1), e.length && e != t)) {
              e.substring(t.length, e.length);
              this.addTagsOnSpace &&
                e.endsWith(" ") &&
                ((this.input = e.trim()), this.tagFromInput(!0)),
                this.addTagsOnComma &&
                  (e = e.trim()).endsWith(",") &&
                  ((this.input = e.substring(0, e.length - 1)),
                  this.tagFromInput(!0)),
                this.$emit("change", e);
            }
          },
          existingTags: function(e) {
            this.typeaheadTags.splice(0),
              (this.typeaheadTags = this.cloneArray(e)),
              this.searchTag();
          },
          tags: function() {
            (this.hiddenInput = JSON.stringify(this.tags)),
              this.$emit("input", this.tags);
          },
          value: function() {
            this.tagsFromValue();
          },
          typeaheadAlwaysShow: function(e) {
            e ? this.searchTag(!1) : this.clearSearchResults();
          }
        },
        methods: {
          escapeRegExp: function(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          },
          tagFromInput: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.composing)
              if (this.searchResults.length && this.searchSelection >= 0 && !e)
                this.tagFromSearch(this.searchResults[this.searchSelection]),
                  (this.input = "");
              else {
                var t = this.input.trim();
                if (!this.onlyExistingTags && t.length && this.validate(t)) {
                  var i;
                  this.input = "";
                  var a =
                      (n((i = {}), this.idField, ""),
                      n(i, this.textField, t),
                      i),
                    r = this.escapeRegExp(
                      this.caseSensitiveTags && this.acccentSensitiveTags
                        ? a[this.textField]
                        : this.caseSensitiveTags
                        ? s()(a[this.textField])
                        : this.acccentSensitiveTags
                        ? a[this.textField].toLowerCase()
                        : s()(a[this.textField].toLowerCase())
                    ),
                    l = !0,
                    o = !1,
                    h = void 0;
                  try {
                    for (
                      var u, c = this.typeaheadTags[Symbol.iterator]();
                      !(l = (u = c.next()).done);
                      l = !0
                    ) {
                      var d = u.value,
                        p = this.escapeRegExp(
                          this.caseSensitiveTags && this.acccentSensitiveTags
                            ? d[this.textField]
                            : this.caseSensitiveTags
                            ? s()(d[this.textField])
                            : this.acccentSensitiveTags
                            ? d[this.textField].toLowerCase()
                            : s()(d[this.textField].toLowerCase())
                        );
                      if (r === p) {
                        a = Object.assign({}, d);
                        break;
                      }
                    }
                  } catch (e) {
                    (o = !0), (h = e);
                  } finally {
                    try {
                      !l && c.return && c.return();
                    } finally {
                      if (o) throw h;
                    }
                  }
                  this.addTag(a);
                }
              }
          },
          tagFromSearchOnClick: function(e) {
            this.tagFromSearch(e), this.$refs.taginput.blur();
          },
          tagFromSearch: function(e) {
            var t = this;
            this.clearSearchResults(),
              this.addTag(e),
              this.$nextTick(function() {
                (t.input = ""), (t.oldInput = "");
              });
          },
          addTag: function(e) {
            var t = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.disabled || i)
              return (
                !!this.beforeAddingTag(e) &&
                (this.limit > 0 && this.tags.length >= this.limit
                  ? (this.$emit("limit-reached"), !1)
                  : void (
                      this.tagSelected(e) ||
                      (this.tags.push(e),
                      this.$nextTick(function() {
                        t.$emit("tag-added", e), t.$emit("tags-updated");
                      }))
                    ))
              );
          },
          removeLastTag: function() {
            !this.input.length &&
              this.deleteOnBackspace &&
              this.tags.length &&
              this.removeTag(this.tags.length - 1);
          },
          removeTag: function(e) {
            var t = this;
            if (!this.disabled) {
              var i = this.tags[e];
              if (!this.beforeRemovingTag(i)) return !1;
              this.tags.splice(e, 1),
                this.$nextTick(function() {
                  t.$emit("tag-removed", i),
                    t.$emit("tags-updated"),
                    t.typeaheadAlwaysShow && t.searchTag();
                });
            }
          },
          searchTag: function() {
            var e = this;
            if (!0 !== this.typeahead) return !1;
            if (
              this.oldInput != this.input ||
              (!this.searchResults.length &&
                0 == this.typeaheadActivationThreshold) ||
              this.typeaheadAlwaysShow ||
              this.typeaheadShowOnFocus
            ) {
              this.typeaheadUrl.length ||
                this.typeaheadCallback ||
                (this.searchResults = []),
                (this.searchSelection = 0);
              var t = this.input.trim();
              if (
                (t.length && t.length >= this.typeaheadActivationThreshold) ||
                0 == this.typeaheadActivationThreshold ||
                this.typeaheadAlwaysShow
              ) {
                var i = this.escapeRegExp(
                  this.caseSensitiveTags && this.acccentSensitiveTags
                    ? t
                    : this.caseSensitiveTags
                    ? s()(t)
                    : this.acccentSensitiveTags
                    ? t.toLowerCase()
                    : s()(t.toLowerCase())
                );
                if (this.typeaheadCallback)
                  this.typeaheadCallback(i).then(function(t) {
                    e.typeaheadTags = t;
                  });
                else if (this.typeaheadUrl.length > 0) {
                  this.typeaheadTags.splice(0);
                  var a = new XMLHttpRequest(),
                    n = this;
                  a.onreadystatechange = function() {
                    4 == this.readyState &&
                      200 == this.status &&
                      ((n.typeaheadTags = JSON.parse(a.responseText)),
                      n.doSearch(i));
                  };
                  var r = this.typeaheadUrl.replace(":search", i);
                  a.open("GET", r, !0), a.send();
                } else this.doSearch(i);
              }
              this.oldInput = this.input;
            }
          },
          doSearch: function(e) {
            var t = this;
            this.searchResults = [];
            var i = !0,
              a = !1,
              n = void 0;
            try {
              for (
                var r, l = this.typeaheadTags[Symbol.iterator]();
                !(i = (r = l.next()).done);
                i = !0
              ) {
                var o = r.value,
                  h =
                    this.caseSensitiveTags && this.acccentSensitiveTags
                      ? o[this.textField]
                      : this.caseSensitiveTags
                      ? s()(o[this.textField])
                      : this.acccentSensitiveTags
                      ? o[this.textField].toLowerCase()
                      : s()(o[this.textField].toLowerCase()),
                  u = this.searchResults.map(function(e) {
                    return e[t.idField];
                  });
                h.search(e) > -1 &&
                  !this.tagSelected(o) &&
                  !u.includes(o[this.idField]) &&
                  this.searchResults.push(o);
              }
            } catch (e) {
              (a = !0), (n = e);
            } finally {
              try {
                !i && l.return && l.return();
              } finally {
                if (a) throw n;
              }
            }
            this.sortSearchResults &&
              this.searchResults.sort(function(e, i) {
                return e[t.textField] < i[t.textField]
                  ? -1
                  : e[t.textField] > i[t.textField]
                  ? 1
                  : 0;
              }),
              this.typeaheadMaxResults > 0 &&
                (this.searchResults = this.searchResults.slice(
                  0,
                  this.typeaheadMaxResults
                ));
          },
          hideTypeahead: function() {
            var e = this;
            this.input.length ||
              this.$nextTick(function() {
                e.clearSearchResults();
              });
          },
          nextSearchResult: function() {
            this.searchSelection + 1 <= this.searchResults.length - 1 &&
              this.searchSelection++;
          },
          prevSearchResult: function() {
            this.searchSelection > 0 && this.searchSelection--;
          },
          clearSearchResults: function() {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            (this.searchResults = []),
              (this.searchSelection = 0),
              this.typeaheadAlwaysShow &&
                this.$nextTick(function() {
                  e.searchTag();
                }),
              t && this.$refs.taginput.focus();
          },
          clearTags: function() {
            this.tags.splice(0, this.tags.length);
          },
          tagsFromValue: function() {
            if (this.value && this.value.length) {
              if (!Array.isArray(this.value))
                return void console.error(
                  "Voerro Tags Input: the v-model value must be an array!"
                );
              var e = this.value;
              if (this.tags == e) return;
              this.clearTags();
              var t = !0,
                i = !1,
                a = void 0;
              try {
                for (
                  var s, n = e[Symbol.iterator]();
                  !(t = (s = n.next()).done);
                  t = !0
                ) {
                  var r = s.value;
                  this.addTag(r, !0);
                }
              } catch (e) {
                (i = !0), (a = e);
              } finally {
                try {
                  !t && n.return && n.return();
                } finally {
                  if (i) throw a;
                }
              }
            } else {
              if (0 == this.tags.length) return;
              this.clearTags();
            }
          },
          tagSelected: function(e) {
            if (this.allowDuplicates) return !1;
            if (!e) return !1;
            var t = this.escapeRegExp(
                this.caseSensitiveTags && this.acccentSensitiveTags
                  ? e[this.textField]
                  : this.caseSensitiveTags
                  ? s()(e[this.textField])
                  : this.acccentSensitiveTags
                  ? e[this.textField].toLowerCase()
                  : s()(e[this.textField].toLowerCase())
              ),
              i = !0,
              a = !1,
              n = void 0;
            try {
              for (
                var r, l = this.tags[Symbol.iterator]();
                !(i = (r = l.next()).done);
                i = !0
              ) {
                var o = r.value,
                  h =
                    this.caseSensitiveTags && this.acccentSensitiveTags
                      ? o[this.textField]
                      : this.caseSensitiveTags
                      ? s()(o[this.textField])
                      : this.acccentSensitiveTags
                      ? o[this.textField].toLowerCase()
                      : s()(o[this.textField].toLowerCase());
                if (
                  o[this.idField] === e[this.idField] &&
                  this.escapeRegExp(h).length == t.length &&
                  h.search(t) > -1
                )
                  return !0;
              }
            } catch (e) {
              (a = !0), (n = e);
            } finally {
              try {
                !i && l.return && l.return();
              } finally {
                if (a) throw n;
              }
            }
            return !1;
          },
          clearInput: function() {
            this.input = "";
          },
          onKeyUp: function(e) {
            this.$emit("keyup", e);
          },
          onKeyDown: function(e) {
            this.$emit("keydown", e);
          },
          onFocus: function(e) {
            this.$emit("focus", e), (this.isActive = !0);
          },
          onClick: function(e) {
            this.$emit("click", e), (this.isActive = !0), this.searchTag();
          },
          onBlur: function(e) {
            this.$emit("blur", e),
              this.addTagsOnBlur && this.tagFromInput(!0),
              this.typeaheadAlwaysShow
                ? this.searchTag()
                : this.hideTypeahead(),
              (this.isActive = !1);
          },
          hiddenInputValue: function(e) {
            if (!this.valueFields) return JSON.stringify(e);
            var t = this.valueFields.replace(/\s/, "").split(",");
            return 1 === t.length
              ? e[t[0]]
              : JSON.stringify(
                  Object.assign.apply(
                    Object,
                    [{}].concat(
                      (function(e) {
                        if (Array.isArray(e)) {
                          for (
                            var t = 0, i = Array(e.length);
                            t < e.length;
                            t++
                          )
                            i[t] = e[t];
                          return i;
                        }
                        return Array.from(e);
                      })(
                        t.map(function(t) {
                          return n({}, t, e[t]);
                        })
                      )
                    )
                  )
                );
          },
          getDisplayField: function(e) {
            return void 0 !== this.displayField &&
              null !== this.displayField &&
              void 0 !== e[this.displayField] &&
              null !== e[this.displayField] &&
              "" !== e[this.displayField]
              ? e[this.displayField]
              : e[this.textField];
          },
          cloneArray: function(e) {
            return e.map(function(e) {
              return Object.assign({}, e);
            });
          }
        }
      },
      function() {
        var e,
          t = this,
          i = t.$createElement,
          a = t._self._c || i;
        return a(
          "div",
          {
            staticClass: "tags-input-root",
            staticStyle: { position: "relative" }
          },
          [
            a(
              "div",
              {
                class:
                  ((e = {}),
                  (e[t.wrapperClass + " tags-input"] = !0),
                  (e.active = t.isActive),
                  (e.disabled = t.disabled),
                  e)
              },
              [
                t._l(t.tags, function(e, i) {
                  return a(
                    "span",
                    {
                      key: i,
                      staticClass:
                        "tags-input-badge tags-input-badge-pill tags-input-badge-selected-default",
                      class: { disabled: t.disabled }
                    },
                    [
                      t._t(
                        "selected-tag",
                        [
                          a("span", {
                            domProps: { innerHTML: t._s(e[t.textField]) }
                          }),
                          t._v(" "),
                          a("a", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !t.disabled,
                                expression: "!disabled"
                              }
                            ],
                            staticClass: "tags-input-remove",
                            attrs: { href: "#" },
                            on: {
                              click: function(e) {
                                return e.preventDefault(), t.removeTag(i);
                              }
                            }
                          })
                        ],
                        { tag: e, index: i, removeTag: t.removeTag }
                      )
                    ],
                    2
                  );
                }),
                t._v(" "),
                a("input", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !t.hideInputField,
                      expression: "!hideInputField"
                    }
                  ],
                  ref: "taginput",
                  attrs: {
                    type: "text",
                    id: t.inputId,
                    name: t.inputId,
                    placeholder: t.placeholder
                  },
                  domProps: { value: t.input },
                  on: {
                    input: function(e) {
                      return (t.input = e.target.value);
                    },
                    compositionstart: function(e) {
                      t.composing = !0;
                    },
                    compositionend: function(e) {
                      t.composing = !1;
                    },
                    keydown: [
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? null
                          : (e.preventDefault(), t.tagFromInput(!1));
                      },
                      function(e) {
                        return e.type.indexOf("key") || 8 === e.keyCode
                          ? t.removeLastTag(e)
                          : null;
                      },
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "down", 40, e.key, [
                            "Down",
                            "ArrowDown"
                          ])
                          ? null
                          : t.nextSearchResult(e);
                      },
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])
                          ? null
                          : t.prevSearchResult(e);
                      },
                      t.onKeyDown
                    ],
                    keyup: [
                      t.onKeyUp,
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                          ? null
                          : t.clearSearchResults(e);
                      }
                    ],
                    focus: t.onFocus,
                    click: t.onClick,
                    blur: t.onBlur,
                    value: t.tags
                  }
                }),
                t._v(" "),
                t.elementId
                  ? a(
                      "div",
                      { staticStyle: { display: "none" } },
                      t._l(t.tags, function(e, i) {
                        return a("input", {
                          key: i,
                          attrs: { type: "hidden", name: t.elementId + "[]" },
                          domProps: { value: t.hiddenInputValue(e) }
                        });
                      }),
                      0
                    )
                  : t._e()
              ],
              2
            ),
            t._v(" "),
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.searchResults.length,
                    expression: "searchResults.length"
                  }
                ]
              },
              [
                "badges" === t.typeaheadStyle
                  ? a(
                      "p",
                      { class: "typeahead-" + t.typeaheadStyle },
                      [
                        t.typeaheadHideDiscard
                          ? t._e()
                          : a("span", {
                              staticClass:
                                "tags-input-badge typeahead-hide-btn tags-input-typeahead-item-default",
                              domProps: {
                                textContent: t._s(t.discardSearchText)
                              },
                              on: {
                                click: function(e) {
                                  return (
                                    e.preventDefault(), t.clearSearchResults(!0)
                                  );
                                }
                              }
                            }),
                        t._v(" "),
                        t._l(t.searchResults, function(e, i) {
                          return a("span", {
                            key: i,
                            staticClass: "tags-input-badge",
                            class: {
                              "tags-input-typeahead-item-default":
                                i != t.searchSelection,
                              "tags-input-typeahead-item-highlighted-default":
                                i == t.searchSelection
                            },
                            domProps: { innerHTML: t._s(e[t.textField]) },
                            on: {
                              mouseover: function(e) {
                                t.searchSelection = i;
                              },
                              mousedown: function(i) {
                                return (
                                  i.preventDefault(), t.tagFromSearchOnClick(e)
                                );
                              }
                            }
                          });
                        })
                      ],
                      2
                    )
                  : "dropdown" === t.typeaheadStyle
                  ? a(
                      "ul",
                      { class: "typeahead-" + t.typeaheadStyle },
                      [
                        t.typeaheadHideDiscard
                          ? t._e()
                          : a("li", {
                              staticClass:
                                "tags-input-typeahead-item-default typeahead-hide-btn",
                              domProps: {
                                textContent: t._s(t.discardSearchText)
                              },
                              on: {
                                click: function(e) {
                                  return (
                                    e.preventDefault(), t.clearSearchResults(!0)
                                  );
                                }
                              }
                            }),
                        t._v(" "),
                        t._l(t.searchResults, function(e, i) {
                          return a("li", {
                            key: i,
                            class: {
                              "tags-input-typeahead-item-default":
                                i != t.searchSelection,
                              "tags-input-typeahead-item-highlighted-default":
                                i == t.searchSelection
                            },
                            domProps: { innerHTML: t._s(t.getDisplayField(e)) },
                            on: {
                              mouseover: function(e) {
                                t.searchSelection = i;
                              },
                              mousedown: function(i) {
                                return (
                                  i.preventDefault(), t.tagFromSearchOnClick(e)
                                );
                              }
                            }
                          });
                        })
                      ],
                      2
                    )
                  : t._e()
              ]
            )
          ]
        );
      },
      [],
      !1,
      null,
      null,
      null
    ).exports;
    window.VoerroTagsInput = r;
    t.default = r;
  }
]);
//# sourceMappingURL=voerro-vue-tagsinput.js.map
