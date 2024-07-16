<template>
    <PagePadding>
        <TheBigContainer>
            <Table :rows="rows" @edit="editRow" @delete="deleteRow" :heading="['Username', 'Email', 'Role', 'Actions']"
                :keys="['username', 'email', 'role']" />
        </TheBigContainer>
        <ConfirmModal v-if="showModal" :message="'Are you sure you want to delete yourself?'" @confirm="confirmDelete"
            @cancel="cancelDelete" />
        <EditUserModal v-if="showEditModal" :user="userToEdit" @save="saveUser" @cancel="cancelEdit" />
    </PagePadding>
</template>

<script>
import Table from '@/components/ui/TheTable.vue';
import ConfirmModal from '@/components/ui/ConfirmModal.vue';
import EditUserModal from '../admin/user/EditUserModal.vue';
import { getAllUsers, deleteUser, updateUser } from '../../../firebaseFunctions';
import { getUserRole } from '../../../firebaseFunctions';
import { useToast } from 'vue-toastification';

export default {
    components: {
        Table,
        ConfirmModal,
        EditUserModal
    },
    data() {
        return {
            rows: [],
            showModal: false,
            showEditModal: false,
            userToDelete: null,
            userToEdit: null,
        };
    },
    async created() {
        console.log("created redone")

        await this.displayUsers()
    },
    methods: {
        editRow(row) {
            this.userToEdit = { ...row };
            this.showEditModal = true;
        },
        cancelEdit() {
            this.showEditModal = false;
            this.userToEdit = null;
        },
        async saveUser(updatedUser) {
            try {
                // Remove 'highlighted' property from updatedUser
                const { highlighted, role, ...userWithoutHighlightAndRow } = updatedUser;

                console.log(highlighted, role, userWithoutHighlightAndRow)
                // Call updateUser without the 'highlighted' property
                await updateUser(updatedUser.id, userWithoutHighlightAndRow);

                // // Update local rows data
                // const updatedRows = this.rows.map(user =>
                //     user.id === updatedUser.id ? { ...updatedUser } : user

                // );

                // // Update component state
                // this.rows = updatedRows;

                console.log(this.rows)

                await this.displayUsers()
                // Close modal and reset state
                this.showEditModal = false;
                this.userToEdit = null;

                const toast = useToast();
                toast.success('User edited successfully');
            } catch (error) {
                console.error('Error editing user: ', error.message);
                const toast = useToast();
                toast.error('Failed to edit user');
            }
        },
        deleteRow(row) {
            if (row.highlighted) {
                this.showModal = true;
                this.userToDelete = row;
            } else {
                this.userToDelete = row;
                this.confirmDelete(row);
            }
        },
        async confirmDelete() {
            try {
                if (this.userToDelete) {
                    if (this.userToDelete.highlighted) {
                        this.$store.dispatch('authModule/logout');
                    }

                    await deleteUser(this.userToDelete.id);

                    this.rows = this.rows.filter(user => user.id !== this.userToDelete.id);
                    this.showModal = false;
                    this.userToDelete = null;

                    const toast = useToast();
                    toast.success('User deleted successfully');

                    if (!this.$store.getters['authModule/getIsLoggedIn']) {
                        this.$router.push({ name: 'login' });
                    }
                }
            } catch (error) {
                console.error('Error deleting user: ', error.message);
                const toast = useToast();
                toast.error('Failed to delete user');
            }
        },
        cancelDelete() {
            this.showModal = false;
            this.userToDelete = null;
        },
        async displayUsers() {
            try {
                const users = await getAllUsers();
                const rowsPromises = users.map(async user => {
                    const roleName = await getUserRole(user.role_id);
                    return {
                        ...user,
                        highlighted: user.email === localStorage.getItem('email'),
                        role: roleName
                    };
                });
                this.rows = await Promise.all(rowsPromises)
                this.rows = this.rows.sort((a, b) => b.highlighted - a.highlighted)
                    ;
            } catch (error) {
                console.error('Error fetching users and roles:', error.message);
            }
        }
    }
};
</script>
