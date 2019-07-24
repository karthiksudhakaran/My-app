<template>
    <nav class="navbar bg-color navbar-static-top text-color shadow-sm">
        <div class="container">
            <div class="navbar-header">
                  
                    <li class="active"><a href="index.html">Home</a></li>
                </ul>
            </div>
            
            <!--/.nav-collapse -->
        </div>
        <!--/.container-fluid -->
    </nav>
</template>

<script>

    export default {
        data(){
            return {
               
            }
        }
    }
</script>

<style scoped>

    a.navbar-brand{
        padding: 0;
    }
    .navbar-brand > img{
        height: 50px;
    }

.navbar-nav>li>a {
   color: #76430f !important;
}

.navbar-nav>li.active{
background: #ffdd76;
}


.nav>li>a:focus,
.nav>li>a:hover{
    background: #ffdd76;
}

.shadow-sm {
   box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.085) !important;

}


.user-profile{
    line-height: 50px;
    box-shadow: none;
}

.open>.dropdown-toggle.btn-default:focus,
.open>.dropdown-toggle.btn-default:link,
.open>.dropdown-toggle.btn-default:active,
.open>.dropdown-toggle.btn-default:hover {
    background: #ffcc33;
}
</style>