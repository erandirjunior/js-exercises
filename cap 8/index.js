const welcome = name => `Welcome, ${name}`

console.log(welcome('Erandir'))

const team = {
	name: 'Guerreiros Z',
	members: ['Goku', 'Kuririn', 'Vegeta'],
	teamMembers: function() {
		this.members.forEach(member => {
			console.log(`${member} is a member of team ${this.name}`);
		})
	}
}

team.teamMembers()