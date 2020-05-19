// okaq mazu sato
// text render
// AQ <aq@okaq.com>
// 2020-05-20
package main

import (
	"fmt"
	"net/http"
	"time"
)

const (
	SATO = "sato.html"
	QIKO = "qiko/"
)

func motd() {
	fmt.Println(time.Now().String())
	fmt.Println("web serve sato welcomes on localhost:8080")
}

func SatoHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,SATO)
}

func main() {
	motd()
	http.HandleFunc("/", SatoHandler)
	http.Handle("/qiko/", http.StripPrefix("/qiko/", http.FileServer(http.Dir(QIKO))))
	http.ListenAndServe(":8080", nil)
}


