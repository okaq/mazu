// okaq.com swan
// AQ <aq@okaq.com>
// 2020-06-06
package main

import (
	"fmt"
	"net/http"
	"time"
)

const (
	ULON = "ulon.html"
	QIKO = "qiko/"
)

func motd() {
	fmt.Println(time.Now().String())
	fmt.Println("web serve localhost:8080")
}

func UlonHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,ULON)
}

func main() {
	motd()
	http.HandleFunc("/", UlonHandler)
	http.Handle("/qiko", http.StripPrefix("/qiko", http.FileServer(http.Dir(QIKO))))
	http.ListenAndServe(":8080", nil)
}


