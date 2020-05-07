// vector art data
// import geometry render test
// AQ <aq@okaq.com>
// 2020-05-08
package main

import (
	"fmt"
	"net/http"
	"time"
)

const (
	RIKU = "riku.html"
	QIKO = "qiko/"
)

func motd() {
	fmt.Println(time.Now().String())
	fmt.Println("web serve on localhost:8080")
}

func RikuHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,RIKU)
}

func main() {
	motd()
	http.HandleFunc("/", RikuHandler)
	http.Handle("/qiko/", http.StripPrefix("/qiko/", http.FileServer(http.Dir(QIKO))))
	http.ListenAndServe(":8080", nil)
}

// static js file handler for async browser load


