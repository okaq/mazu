// vector art darw tool
// aq@okaq.com
// 2020-04-26
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"time"
)

const (
	INDEX = "pola.html"
	SAVE = "qola"
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

func SaveHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	b0, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("Read %d bytes\n", len(b0))
	// prompt for name
	fmt.Printf("Input file name to save: \n")
	var filename string
	fmt.Scanln(&filename)
	s0 := fmt.Sprintf("%s/%s.txt", SAVE, filename)
	// save to disk
	fmt.Printf("saving %s to disk\n", s0)
	ioutil.WriteFile(s0, b0, 0644)
	// respond with file name
	w.Write([]byte(s0))
}

func main() {
	motd()
	http.HandleFunc("/", PolaHandler)
	http.HandleFunc("/a", PingHandler)
	http.HandleFunc("/b", SaveHandler)
	http.ListenAndServe(":8080", nil)
}

// serve web app
// save handler for vertex (XYZ) pairs data
// data format for connected edges


