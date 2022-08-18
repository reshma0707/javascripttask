var text = "Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the 'small' ideas of individual sentences to a 'bigger' idea, paragraph structure is essential to any writing for organization, flow, and comprehension. Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert, including several paragraph examples."

//find sentences
var counting = (text.split(".").length)
console.log(counting)

//total words
var wordcount = text.split(" ").length
console.log(wordcount)

//total characters
 
var charactercount = text.split("").length
console.log(charactercount)

// occurence of the word para 

var occurence = (text.match(/paragraph/g) || []).length
console.log(occurence)

//count of the special characters used 

var specialchar = text.match( /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi)
console.log(specialchar.length)

// Replace the word "paragraph" with "para"

var replacing = text.replace(/paragraph/g, "para")
console.log(replacing)

//Slice the paragraph from the second sentence

var slice = text.split(".") || [];
var cutting = slice[0]
console.log(cutting)