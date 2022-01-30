console.log('            METHOD ONE');
let flower = "rose", tree = "apple";
console.log(flower);
console.log(tree);

let temp;  // I created a temporary variable

temp = flower; // I stored the value of (flower) temporarily
flower = tree; // I assigned the value of (tree) into (flower)
tree = temp;   // I assigned the value of (temp) into (tree)
              // voila
console.log(' The value of flower after swapping: ',flower );
console.log(' The value of tree after swapping: ',tree);
          
                        //OR USING DESTRUCTURING ASSIGNMENT(,)
console.log('              METHOD TWO');
let flower2 = "rose";
let tree2 = "apple";

console.log(flower2);
console.log(tree2);

[flower2, tree2] = [tree2, flower2];
console.log('value of flower after swapping: ',flower2);
console.log('value of tree after swapping: ',tree2);