export const filterUsers = {
    data() {
        return {
            filter: '',
            users: [
                {name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-11' },
                {name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01' },
                {name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09' },
                {name: 'paul david', age: 21, status: 1, created_at: '2017-09-21' },
                {name: 'john williams', age: 20, status: 0, created_at: '2017-03-13' },
                {name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30' },
                {name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19' },
                {name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17' },
                {name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04' },
                {name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05' },
                {name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16' },
                {name: 'sam john', age: 24, status: 0, created_at: '2017-04-01' },
                {name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08' }
            ]
        }
    },
    methods: {
        get_active_or_inactive(){
            if(this.status != null) {
                var status = this.status;
                return this.users.filter(function(users){
                    return users.status == status;
                });
            } else {
                return this.users;
            }
        },
        filter_by(users, filter) {
            return users.sort(function(a, b){
                // return a[filter] > b[filter];
                if (a[filter] > b[filter]) return 1;
                if (a[filter] < b[filter]) return -1;
                return 0;
            })
        }
    },
    computed: {
        filteredUsers(){
            if(!this.filter) {
                this.filter = "created_at";
            }
            return this.filter_by(this.get_active_or_inactive(), this.filter);
        },
        userFilters() {
            let arr = [];
            for(let prop in this.users[0]) {
                arr.push(prop);
            }
            return arr;
        }
    } 
}