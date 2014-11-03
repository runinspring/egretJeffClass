/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
var mvc;
(function (mvc) {
    var Command = (function () {
        function Command(body) {
            this.facade = body;
        }
        Command.prototype.execute = function (note) {
        };
        return Command;
    })();
    mvc.Command = Command;
    Command.prototype.__class__ = "mvc.Command";
})(mvc || (mvc = {}));
