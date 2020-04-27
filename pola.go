// vector art darw tool
// aq@okaq.com
// 2020-04-26
package main

import (
	"fmt"
	"net/http"
	"time"
)

const (
	INDEX = "pola.html"
)

func motd() {
	fmt.Println("web serve on localhost:8080")
	fmt.Println(time.Now().String())
}

func PolaHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,INDEX)
}

func PingHandler(w http.ResponseWriter, r *http.Request) {
	// time is of essence
	t0 := time.Now().UnixNano()
	w.Header().Set("Content-type", "text/plain")
	w.Write([]byte(fmt.Sprintf("%d", t0)))
}

func main() {
	motd()
	http.HandleFunc("/", PolaHandler)
	http.HandleFunc("/a", PingHandler)
	http.ListenAndServe(":8080", nil)
}

// serve web app
// save handler for vertex (XYZ) pairs data
// data format for connected edges


