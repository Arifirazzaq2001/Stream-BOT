const isUrl = (url) => {
       return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

const isLinkyt = (url) => {
       return url.match(
        new RegExp(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/,
          "gi"
        )
      );
    };
    
module.exports = {
    isUrl, 
	isLinkyt
	}
	