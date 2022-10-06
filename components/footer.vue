<template>
  <div>
    <footer className="p-16">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {{ new Date().getFullYear() }} Tray.io, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>