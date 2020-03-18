// okaq web server
// wbegl 2.0 vectors
// aq@okaq.com
// 2020-03-17
package main

import (
	"fmt"
	"net/http"
	"time"
)

const (
	INDEX = "mazu.html"
)

func motd() {
	fmt.Println("serving now on $PUBLIC_IP:8080")
	fmt.Println(time.Now().String())
}

func MazuHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,INDEX)
}

func main() {
	motd()
	// rand
	// cache
	http.HandleFunc("/", MazuHandler)
	http.ListenAndServe(":8080", nil)
}


