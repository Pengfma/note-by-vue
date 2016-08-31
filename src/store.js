const STORY_KEY='todos-vue.js'
export default{
	fetch: function () {
		return JSON.parse(window.localStorage.getItem(STORY_KEY || '[]'))
	},
	save:function (items) {
		window.localStorage.setItem(STORY_KEY,JSON.stringify(items))
	}
}