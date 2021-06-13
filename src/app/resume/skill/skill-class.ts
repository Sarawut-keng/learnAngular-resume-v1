
export class subSkill {
	id!: number
        name!: string
	skills!: string[]
}


export class skillClass {
	id!: number
        name!: string
        skill!: subSkill[]
}