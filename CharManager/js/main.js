.container-1 {
	display: flex;
	flex-direction: row;
 }
  	
/* cont 2 */
.container-2 {
	display: flex;
	flex-direction: row;	
}  

  /* cont 3 */
.container-3 {
	display: flex;
	flex-direction: row;
}

  

  .weaponprof-wrapper{
	border: solid thin red;
  }

  .skills-wrapper{
	border: solid thin red;
  }




/* Header - name,level,xp,ancestry,background,heritage,class,size,alignment,traits,deity,hero-points */
.char-wrapper{
	border: solid thin red;
	
  }

.container-1 
span {
	display: flex;
	justify-content: center;
}

.container-1 
ul {
	width: 100%;
}

.container-1 
li {	
    display: flex;
    flex-direction: column;
}

.container-1 
.larger-input {
	width: 50%;
}

.container-1 input {
	display: flex;
	align-self: center;
	width: 60px;
	text-align: center;
}

/* ancestry */

.ancestry-wrapper {
	border: solid thin darkgreen;
	display: flex;
	flex-direction: column;
	width: 70%;
  }

.ancestry {
	display: flex;	
	width: 100%;
	line-height: 30px;
}

.ancestry span {
	justify-content: start;
	
}

.ancestry
input {
	align-self: flex-start;
}

.ancestry
textarea {
	width: 50%;
}

.group-1 {
	display: flex;	
	justify-content: center;
	width: 60%;
}

.group-1
select {
	width: 100px;
	text-align: center;
}

.group-1
span {
	justify-content: flex-start;
	width: 50%;
}
.group-1
li {
	flex-direction:column;
}

.group-1
.traits {
	width: 100%;
}

/* Ability scores, AC, HP, Percep */
/* this needs WORK */

.ability-wrapper{
	border: solid thin red;	
	width: 30%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	line-height: 30px;
  }
  
  .group-2
  ul{	
	display: flex;
	flex-direction: column;
  }

  .group-2
  li {
	display: flex;
	justify-content: right;
  }

  .group-2 input ~ span{
	padding-left: 5px;
  }


.ability-wrapper
input {
	width: 40px ;
	text-align: center;
}

/* class dc */
.classdc-wrapper {
	display: flex;
	width: 100%;
	justify-content: center;
	line-height: initial;
	margin-top: 10px;
}

.classdc-wrapper
li {
	display: flex;	
	justify-content: center;	
}

.classdc-wrapper
input {
	line-height: 30px;
	text-align: center;
}

/* bottom */

.classdc-bottom{
	margin-top: 5px;
}

.classdc-bottom
input {
	line-height: 25px;
}

.classdc-bottom
select {
	height: 30px;
}

.classdc-bottom
ul{
	display: flex;
	flex-direction: row;
	align-items: flex-end;	
	text-align: center;
}

.classdc-bottom
li {
	padding-left: 5px;
}


/* Armor */

.armor-wrapper {
	border: solid thin red;
	width:40%;
	line-height: 30px;
	display: flex;
	flex-direction: column;
	row-gap: 5px;
  }

  .armor-wrapper > span {
	text-align: center;
  }

  .armor-wrapper
  input {
	width: 40px;
  }

  	.ac-wrapper
	ul {
		display: flex;
		justify-content: center;
	}

	.ac-wrapper
	li {
		display: flex;
		flex-direction: row;
		margin: 5px 0;
		padding-left: 10px;
	}

	.armor-type-wrapper
	ul {
		display: flex;
		flex-direction: row;
		line-height: normal;
		margin: 10px 0;
		justify-content: center;
	}
		.armor-type-wrapper
		li {
			text-align: center;
			padding-left: 10px;
		}
	/*shield info  */
	.shield-wrapper
	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

		.shield-wrapper
		input {
			display: flex;			
			justify-content: center;
			padding-left: 10px;
		}

		
		h4 {
			display: flex;
			justify-content: center;
			margin: 5px 0;
		}

/* saving throws */

	.saves-wrapper{
		display: flex;
		justify-content: right;
		margin: 10px 0;
		width: 80%;
	}

	.test {
		display: flex;
		justify-content: center;
	}

		.saves-wrapper
		ul {
			display: flex;			
		}

		.saves-wrapper
		li {
			padding-left: 10px;
		}

/* HP Section */

.hp-wrapper {
	border: solid thin red;
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;	
  }

  .hp-wrapper
  input {
	width: 50px;
  }

  /* Perception box */
  .perception-wrapper{
    border: solid thin red;
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
	line-height: 30px;
	font-size: 16px;
  }

  	.perception-wrapper
	input {
		width: 50px;
		
	}

	.perception-wrapper
	select {
		margin-top: 1em;
	}

	.senses{
		display: flex;
    	flex-direction: column;
    	align-self: center;
	}

	.senses
	textarea {
		width: 11em
	}