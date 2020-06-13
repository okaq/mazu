// 3dtd nano game server
// AQ <aq@okaq.com>
// 2020-06-14
package main

import (
	"fmt"
	"net/http"
	"time"
)

const (
	INDEX = "3dtd.html"
	NANO = "nano/"
)

func motd() {
	fmt.Println(time.Now().String())
	fmt.Println("web serve localhost:8080")
}

func TowerHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,INDEX)
}

func main() {
	motd()
	http.HandleFunc("/", TowerHandler)
	http.Handle("/nano", http.StripPrefix("/nano/", http.FileServer(http.Dir(NANO))))
	http.ListenAndServe(":8080", nil)
}


