
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([3],{100:function(e,t,r){e.exports={default:r(108),__esModule:!0}},108:function(e,t,r){var n=r(0),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},165:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=(0,g.parse)(e,!1,!0),r=(0,g.parse)((0,M.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}Object.defineProperty(t,"__esModule",{value:!0});var o=r(30),i=n(o),l=r(100),f=n(l),u=r(13),s=n(u),c=r(5),d=n(c),h=r(6),p=n(h),v=r(15),y=n(v),m=r(14),k=n(m),g=r(90),_=r(1),w=n(_),E=r(42),O=n(E),b=r(65),C=n(b),M=r(41),x=function(e){function t(e){var r;(0,d.default)(this,t);for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var i=(0,y.default)(this,(r=t.__proto__||(0,s.default)(t)).call.apply(r,[this,e].concat(a)));return i.linkClicked=i.linkClicked.bind(i),i.formatUrls(e),i}return(0,k.default)(t,e),(0,p.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.href,n=this.as;if(a(r)){var o=window.location.pathname;r=(0,g.resolve)(o,r),n=n?(0,g.resolve)(o,n):r,e.preventDefault();var i=this.props.scroll;null==i&&(i=n.indexOf("#")<0);var l=this.props.replace,f=l?"replace":"push";C.default[f](r,n).then(function(e){e&&i&&window.scrollTo(0,0)}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,g.resolve)(e,this.href);C.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,f.default)(this.props.href)!==(0,f.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,i.default)(e.href)?(0,g.format)(e.href):e.href,this.as=e.as&&"object"===(0,i.default)(e.as)?(0,g.format)(e.as):e.as}},{key:"render",value:function(){var e=this.props.children,t=this.href,r=this.as;"string"==typeof e&&(e=w.default.createElement("a",null,e));var n=_.Children.only(e),a={onClick:this.linkClicked};return"a"!==n.type||"href"in n.props||(a.href=r||t),w.default.cloneElement(n,a)}}]),t}(_.Component);x.propTypes={prefetch:O.default.bool,children:O.default.oneOfType([O.default.element,function(e,t){return"string"==typeof e[t]&&T("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired},t.default=x;var T=(0,M.execOnce)(M.warn)},192:function(e,t,r){e.exports=r(96)},96:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(165),l=n(i),f=r(66),u=n(f);t.default=function(){return o.default.createElement("div",null,o.default.createElement(u.default,null),o.default.createElement("div",null,o.default.createElement(l.default,{href:"/search"},"Search"),o.default.createElement(l.default,{href:"/favorites"},"Favorites"),"Main"))}}},[192]);
            return { page: comp.default }
          })
        