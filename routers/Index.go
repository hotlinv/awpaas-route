package routers

import (
	"github.com/gin-gonic/gin"
)

/**
	路由列表
 */
func Execute(route *gin.RouterGroup) {
	route.GET("/", Home)
	route.GET("/whiteList", WhiteList)
	route.Any("/tips/:code", Tips)
}
