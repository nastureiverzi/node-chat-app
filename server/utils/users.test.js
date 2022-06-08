const expect = require('expect');
const{Users} = require('./users');

var users;

beforeEach(()=>{
    users = new Users();
    users.users = [{
        id: '1', 
        name: 'George', 
        room: 'Node course'
    }, {
        id: '2', 
        name: 'Raluca', 
        room: 'React course'
    }, {
        id: '3', 
        name: 'Marian', 
        room: 'Java course'
    }]
});

describe('Users', ()=>{
    it('should add new user', ()=>{
        var users = new Users();
        var user = {
            id: '123', 
            name: 'Raluca', 
            room: 'The Office Fans'
        };

        var res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', ()=>{
        var userList = users.getUserList('Node course');
        
        expect(userList).toEqual(['George']);
    });

    it('should remove a user', ()=>{
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', ()=>{
        var userId = '13';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', ()=>{
        var userId = '2';

        var res = users.getUser(userId);

        expect(res.id).toBe(userId);
    });

    it('should not find user', ()=>{
        var userId = '23';

        var res = users.getUser(userId);

        expect(res).toBeFalsy();
    });
});