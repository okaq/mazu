// okaq pola vector art draw tool
// v0.1 - data file stich script
// AQ <aq@okaq.com>
// 2020-05-08
package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

const (
	// OUT = "qola.json"
	// OUT = "symbol.json"
	KEY = "symbol"
)

var (
	W *bufio.Writer
	O *os.File
	D []os.FileInfo
)

func open() {
	// open output file for writing
	var err error
	f0 := fmt.Sprintf("%s.json", KEY)
	// O, err = os.Create(OUT)
	O, err = os.Create(f0)
	if err != nil {
		fmt.Println(err)
	}
}

func write() {
	// connect the file writer
	W = bufio.NewWriter(O)
	// fmt.Println(W)
}

func dir() {
	// read files in directory
	var err error
	D, err = ioutil.ReadDir(".")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(D)
}

func pat() {
	// write json output
	var err error
	k0 := fmt.Sprintf("const %s = {};\n", KEY)
	_, err = W.WriteString(k0)
	// _, err = W.WriteString("const qola = {};\n")
	if err != nil {
		fmt.Println(err)
	}
	i0 := 0
	for _, f0 := range D {
		s0 := f0.Name()
		var b0 []byte
		b0, err = ioutil.ReadFile(s0)
		if err != nil {
			fmt.Println(err)
		}
		s1 := string(b0)
		s2 := strings.Split(s0, ".")
		if s2[1] != "txt" { continue }
		// s3 := fmt.Sprintf("qola.%s = %s;\n", s2[0], s1)
		s3 := fmt.Sprintf("%s.%s = %s;\n", KEY, s2[0], s1)
		_, err = W.WriteString(s3)
		if err != nil {
			fmt.Println(err)
		}
		i0++
	}
	_, err = W.WriteString("\n\n")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("%d files written to output json\n", i0)
}

func main() {
	open()
	write()
	dir()
	pat()
	W.Flush()
	// O.Sync()
	O.Close()
}

// use os.Create(filename) for bufio
// otherwise we may have a bad file descriptor
