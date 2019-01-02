/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
var soundex;
(function (soundex) {
    var Soundex = (function () {
        function Soundex() {
        }
        Soundex.getGode = function (s) {
            var x = (s.toUpperCase()).split('');
            var firstLetter = x[0];
            for (var i = 0; i < x.length; i++) {
                switch ((x[i]).charCodeAt(0)) {
                    case 66 /* 'B' */:
                    case 70 /* 'F' */:
                    case 80 /* 'P' */:
                    case 86 /* 'V' */:
                        {
                            x[i] = '1';
                            break;
                        }
                        ;
                    case 67 /* 'C' */:
                    case 71 /* 'G' */:
                    case 74 /* 'J' */:
                    case 75 /* 'K' */:
                    case 81 /* 'Q' */:
                    case 83 /* 'S' */:
                    case 88 /* 'X' */:
                    case 90 /* 'Z' */:
                        {
                            x[i] = '2';
                            break;
                        }
                        ;
                    case 68 /* 'D' */:
                    case 84 /* 'T' */:
                        {
                            x[i] = '3';
                            break;
                        }
                        ;
                    case 76 /* 'L' */:
                        {
                            x[i] = '4';
                            break;
                        }
                        ;
                    case 77 /* 'M' */:
                    case 78 /* 'N' */:
                        {
                            x[i] = '5';
                            break;
                        }
                        ;
                    case 82 /* 'R' */:
                        {
                            x[i] = '6';
                            break;
                        }
                        ;
                    default:
                        {
                            x[i] = '0';
                            break;
                        }
                        ;
                }
            }
            ;
            var output = "" + firstLetter;
            for (var i = 1; i < x.length; i++)
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x[i]) != (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x[i - 1]) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(x[i]) != '0'.charCodeAt(0))
                    output += x[i];
            ;
            output = output + "0000";
            return output.substring(0, 4);
        };
        Soundex.main = function (args) {
            var name1 = document.getElementById("firstname").value;
            var name2 = document.getElementById("SelectedName").value;
            var name3 = "bearer";
            

            console.info(Soundex.getGode(name1));
            console.info(Soundex.getGode(name2));
            console.info(Soundex.getGode(name3));
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(name1, name2))
                console.info("same name");
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(Soundex.getGode(name1), Soundex.getGode(name2))) {
                console.info("Matched-  same person with slightly different names");
            }
            else {
                console.info("Not matched - potentially different people");
            }
        };
        return Soundex;
    }());
    soundex.Soundex = Soundex;
    Soundex["__class"] = "soundex.Soundex";
})(soundex || (soundex = {}));

//soundex.Soundex.main(null);
