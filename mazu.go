// okaq web server
// wbegl 2.0 vectors
// aq@okaq.com
// 2020-03-17
package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"sync"
	"sync/atomic"
	"time"
)

const (
	INDEX = "mazu.html"
	THREE = "js/three.min.js"
)

var (
	R *rand.Rand
	C uint64
	M *sync.Map
)

func motd() {
	fmt.Println("serving now on $PUBLIC_IP:8080")
	fmt.Println(time.Now().String())
}

func MazuHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	// increment counter
	atomic.AddUint64(&C, 1)
	http.ServeFile(w,r,INDEX)
}

func StatHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	w.Header().Set("Content-type", "plain/text")
	s0 := fmt.Sprintf("Count: %d", C)
	w.Write([]byte(s0))
}

func rng() {
	R = rand.New(rand.NewSource(time.Now().UnixNano()))
	fmt.Printf("rng: %f\n", R.Float32())
}

func cache() {
	M = new(sync.Map)
	M.Store("0","0|nil")
	// fmt.Println(M)
}

func ThreeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,THREE)
}

func main() {
	motd()
	rng()
	cache()
	C = 0
	http.HandleFunc("/", MazuHandler)
	http.HandleFunc("/s", StatHandler)
	http.HandleFunc("/b", ThreeHandler)
	http.ListenAndServe(":8080", nil)
}


