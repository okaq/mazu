// okaq mazu tabi
// manfred mohr homage
// AQ <aq@okaq.com>
// 2020-05-26
package main

import (
	"fmt"
	"net/http"
	"time"
)

const (
	TABI = "tabi.html"
	QIKO = "qiko/"
)

func motd() {
	fmt.Println(time.Now().String())
	fmt.Println("web serve localhost:8080")
}

func TabiHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,TABI)
}

func main() {
	motd()
	http.HandleFunc("/", TabiHandler)
	http.Handle("/qiko/", http.StripPrefix("/qiko/", http.FileServer(http.Dir(QIKO))))
	http.ListenAndServe(":8080", nil)
}



