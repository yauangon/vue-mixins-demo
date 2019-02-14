export const filterUsers = {
  data() {
    return {
      sortCriteria: "",
      users: [
        {
          name: "Nurdan Çağıran",
          age: 23,
          status: 0,
          created: "2018-09-22",
          image: "https://randomuser.me/api/portraits/thumb/women/31.jpg"
        },
        {
          name: "Julien Morin",
          age: 27,
          status: 1,
          created: "2018-10-18",
          image: "https://randomuser.me/api/portraits/thumb/men/67.jpg"
        },
        {
          name: "Herma Rabe",
          age: 33,
          status: 1,
          created: "2018-04-20",
          image: "https://randomuser.me/api/portraits/thumb/women/82.jpg"
        },
        {
          name: "Eva Flores",
          age: 28,
          status: 0,
          created: "2018-11-21",
          image: "https://randomuser.me/api/portraits/thumb/women/4.jpg"
        },
        {
          name: "Benedikte Urdal",
          age: 32,
          status: 0,
          created: "2018-09-24",
          image: "https://randomuser.me/api/portraits/thumb/women/63.jpg"
        },
        {
          name: "Toby Taylor",
          age: 25,
          status: 1,
          created: "2018-08-27",
          image: "https://randomuser.me/api/portraits/thumb/men/58.jpg"
        },
        {
          name: "حامد کوتی",
          age: 27,
          status: 1,
          created: "2018-04-17",
          image: "https://randomuser.me/api/portraits/thumb/men/91.jpg"
        },
        {
          name: "Tammy Mendoza",
          age: 31,
          status: 0,
          created: "2018-05-13",
          image: "https://randomuser.me/api/portraits/thumb/women/72.jpg"
        },
        {
          name: "Kathy Gordon",
          age: 31,
          status: 1,
          created: "2018-04-23",
          image: "https://randomuser.me/api/portraits/thumb/women/44.jpg"
        },
        {
          name: "Tristan Nielsen",
          age: 30,
          status: 1,
          created: "2018-01-18",
          image: "https://randomuser.me/api/portraits/thumb/men/2.jpg"
        },
        {
          name: "Lilja Wallo",
          age: 30,
          status: 1,
          created: "2018-01-21",
          image: "https://randomuser.me/api/portraits/thumb/women/79.jpg"
        },
        {
          name: "Russell Grant",
          age: 33,
          status: 0,
          created: "2018-09-26",
          image: "https://randomuser.me/api/portraits/thumb/men/55.jpg"
        }
      ]
    };
  },
  methods: {
    filter_active_inactive() {
      if (this.status != null) {
        var status = this.status;
        return this.users.filter(function(users) {
          return users.status == status;
        });
      } else {
        return this.users;
      }
    },
    sort_by(users, sortProp) {
      return users.sort(function(a, b) {
        if (a[sortProp] > b[sortProp]) return 1;
        if (a[sortProp] < b[sortProp]) return -1;
        return 0;
      });
    }
  },
  computed: {
    sortedUsers() {
      if (!this.sortCriteria) {
        this.sortCriteria = "created_at";
      }
      return this.sort_by(this.filter_active_inactive(), this.sortCriteria);
    },
    userProperties() {
      let arr = [];
      for (let prop in this.users[0]) {
        arr.push(prop);
      }
      return arr;
    }
  }
};
